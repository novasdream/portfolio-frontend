import { ApolloClient } from '@apollo/client'
import { clone } from 'lodash'
import get from 'lodash/get'
import { GetServerSidePropsContext, Redirect } from 'next'

import { PATHS } from '@/configs/misc'
import { createStore } from '@/store/store'
import { IMeta, IPageQuery, IStoreState } from '@/types'
import { getApolloClientWithInitialState } from '@/utils/apollo'

export const getInitialReduxStateFromInitialApolloState = (
  apolloClient: ApolloClient<Record<string, unknown>>,
  queries?: IPageQuery[]
): IStoreState => {
  const store = createStore()

  queries?.forEach((query) => {
    if (!query.action && !query.actions) return

    const entity = apolloClient.readQuery({
      query: query.query,
      variables: query.variables
    })

    const pathEntity = get(entity, query.path)

    if (pathEntity) {
      let normalizedEntity = clone(pathEntity)

      if (query.normalizer) {
        normalizedEntity = query.normalizer(normalizedEntity)
      }

      if (query.action) {
        store.dispatch(query.action(normalizedEntity))
      }

      if (query.actions) {
        query.actions.forEach((action) => {
          store.dispatch(action(normalizedEntity))
        })
      }
    }
  })

  return store.getState()
}

export const getServerSidePropsForPublicPage = async (
  context: GetServerSidePropsContext,
  queries?: IPageQuery[]
): Promise<{
  redirect?: Redirect
  props: {
    initialApolloState?: Record<string, unknown>
    initialReduxState?: IStoreState
    meta?: IMeta
  }
}> => {
  try {
    const initialApolloState = await getApolloClientWithInitialState(queries)

    const initialReduxState = getInitialReduxStateFromInitialApolloState(
      initialApolloState,
      queries
    )

    console.log(initialReduxState)

    return {
      props: {
        initialApolloState: initialApolloState.cache.extract(),
        initialReduxState
      }
    }
  } catch (error) {
    return {
      props: {},
      redirect: { destination: PATHS.ERROR, permanent: false }
    }
  }
}

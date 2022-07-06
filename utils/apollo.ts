import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  StoreObject
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { persistCache, SessionStorageWrapper } from 'apollo3-cache-persist'

import { IS_DEV, STRAPI_GRAPHQL_URL } from '@/configs/env'
import { IPageQuery } from '@/types'

export const initializeApollo = ({
  initialState
}: {
  initialState?: Record<string, StoreObject>
}): ApolloClient<Record<string, unknown>> => {
  const cache = new InMemoryCache()

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(async () =>
      await persistCache({
        cache,
        storage: new SessionStorageWrapper(window.sessionStorage),
        debug: IS_DEV
      }))()
  }

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      )
    }

    if (networkError) console.log(`[Network error]: ${networkError}`)
  })

  const link = new HttpLink({
    uri: STRAPI_GRAPHQL_URL,
    credentials: 'same-origin'
  })

  const apolloClient = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([errorLink, link]),
    cache
  })

  if (initialState) {
    const existingCache = apolloClient.extract()

    apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  return apolloClient
}

export const getApolloClientWithInitialState = async (
  queries?: IPageQuery[]
): Promise<ApolloClient<Record<string, unknown>>> => {
  const apolloClient = initializeApollo({})

  await Promise.all(
    queries?.map((query) =>
      apolloClient.query({
        query: query.query,
        variables: query?.variables,
        context: query.context
      })
    ) ?? []
  )

  return apolloClient
}

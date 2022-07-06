import '../styles/globals.scss'

import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { FC, useMemo } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import smoothscroll from 'smoothscroll-polyfill'

import { CalendlyWidgetScript } from '@/components'
import { META_DEFAULTS } from '@/configs/misc'
import { createStore } from '@/store/store'
import { AppPropsWithLayout } from '@/types'
import { initializeApollo } from '@/utils/apollo'

if (typeof window !== 'undefined') {
  smoothscroll.polyfill()
}

const App: FC<AppProps> = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  const apolloClient = useMemo(
    () =>
      initializeApollo({
        initialState: pageProps?.initialApolloState
      }),
    [pageProps?.initialApolloState]
  )

  const store = useMemo(
    () => createStore(pageProps?.initialReduxState),
    [pageProps?.initialReduxState]
  )

  return (
    <>
      <Head>
        <title>{`${META_DEFAULTS.title} | ${META_DEFAULTS.description}`}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </Head>

      <ApolloProvider client={apolloClient}>
        <ReduxProvider store={store}>
          {getLayout(<Component {...pageProps} />)}
          <CalendlyWidgetScript />
        </ReduxProvider>
      </ApolloProvider>
    </>
  )
}

export default App

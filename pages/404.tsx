import { ReactElement } from 'react'

import { Error404Template, SiteHead, SiteLayout } from '@/components'

export interface IError404PageProps {}

export const Error404Page = () => <Error404Template />

Error404Page.displayName = 'Error404Page'

Error404Page.getLayout = (page: ReactElement) => {
  return (
    <>
      <SiteHead title="Not Found" />
      <SiteLayout footerTheme="dark">{page}</SiteLayout>
    </>
  )
}

export default Error404Page

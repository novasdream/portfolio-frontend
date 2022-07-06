import { ReactElement } from 'react'

import { Error500Template, SiteHead, SiteLayout } from '@/components'

export interface IError500PageProps {}

export const Error500Page = () => <Error500Template />

Error500Page.displayName = 'Error500Page'

Error500Page.getLayout = (page: ReactElement) => {
  return (
    <>
      <SiteHead title="Internal Error" />
      <SiteLayout footerTheme="dark">{page}</SiteLayout>
    </>
  )
}

export default Error500Page

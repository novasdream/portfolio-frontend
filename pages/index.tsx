import { GetServerSideProps } from 'next'
import { ReactElement } from 'react'

import { HomePageTemplate, SiteHead, SiteLayout } from '@/components'
import { GET_PROFILE_QUERY, HOME_PAGE_QUERY } from '@/queries'
import { set as setHomePage } from '@/store/slices/homePageSlice'
import { set as setProfile } from '@/store/slices/profileSlice'
import { normalizeHomePage } from '@/utils/home'
import { getServerSidePropsForPublicPage } from '@/utils/pages'
import { normalizeProfile } from '@/utils/profile'

export const HomePage = () => <HomePageTemplate />

export const getServerSideProps: GetServerSideProps = async (context) =>
  getServerSidePropsForPublicPage(context, [
    {
      query: GET_PROFILE_QUERY,
      path: 'profile.data',
      action: setProfile,
      normalizer: normalizeProfile
    },
    {
      query: HOME_PAGE_QUERY,
      path: 'homePage.data',
      action: setHomePage,
      normalizer: normalizeHomePage
    }
  ])

HomePage.displayName = 'HomePage'

HomePage.getLayout = (page: ReactElement) => {
  return (
    <>
      <SiteHead />
      <SiteLayout>{page}</SiteLayout>
    </>
  )
}

export default HomePage

import { GetServerSideProps } from 'next'
import { ReactElement } from 'react'

import { HomePageTemplate, SiteHead, SiteLayout } from '@/components'
import { GET_PROFILE_QUERY } from '@/queries'
import { set as setProfile } from '@/store/slices/profileSlice'
import { getServerSidePropsForPublicPage } from '@/utils/pages'
import { normalizeProfile } from '@/utils/profile'

export interface IHomePageProps {}

export const HomePage = () => <HomePageTemplate />

export const getServerSideProps: GetServerSideProps = async (context) =>
  getServerSidePropsForPublicPage(context, [
    {
      query: GET_PROFILE_QUERY,
      path: 'profile.data',
      action: setProfile,
      normalizer: normalizeProfile
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

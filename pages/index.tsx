import { GetServerSideProps } from 'next'
import { ReactElement } from 'react'

import { HomePageTemplate, SiteHead, SiteLayout } from '@/components'
import {
  GET_PROFILE_QUERY,
  HOME_PAGE_QUERY,
  LIST_FEATURED_POSTS_SUMMARY_QUERY,
  LIST_FEATURED_PROJECTS_SUMMARY_QUERY
} from '@/queries'
import { set as setHomePage } from '@/store/slices/homePageSlice'
import { setFeaturedList as setPostFeaturedList } from '@/store/slices/postSlice'
import { set as setProfile } from '@/store/slices/profileSlice'
import { setFeaturedList as setProjectFeaturedList } from '@/store/slices/projectSlice'
import { normalizeHomePage } from '@/utils/home'
import { getServerSidePropsForPublicPage } from '@/utils/pages'
import { normalizePosts } from '@/utils/post'
import { normalizeProfile } from '@/utils/profile'
import { normalizeProjects } from '@/utils/project'

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
    },
    {
      query: LIST_FEATURED_POSTS_SUMMARY_QUERY,
      path: 'posts.data',
      action: setPostFeaturedList,
      normalizer: normalizePosts
    },
    {
      query: LIST_FEATURED_PROJECTS_SUMMARY_QUERY,
      path: 'projects.data',
      action: setProjectFeaturedList,
      normalizer: normalizeProjects
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

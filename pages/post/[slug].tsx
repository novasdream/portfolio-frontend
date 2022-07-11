import { GetServerSideProps } from 'next'
import { ReactElement } from 'react'

import { PostDetailTemplate, SiteHead, SiteLayout } from '@/components'
import { GET_POST_BY_SLUG_QUERY, GET_PROFILE_QUERY } from '@/queries'
import { setSelected as setPostSelected } from '@/store/slices/postSlice'
import { set as setProfile } from '@/store/slices/profileSlice'
import { getServerSidePropsForPublicPage } from '@/utils/pages'
import { normalizePostBySlug } from '@/utils/post'
import { normalizeProfile } from '@/utils/profile'

export interface IPostDetailPageProps {}

export const PostDetailPage = () => {
  return <PostDetailTemplate />
}

export const getServerSideProps: GetServerSideProps = async (context) =>
  getServerSidePropsForPublicPage(context, [
    {
      query: GET_PROFILE_QUERY,
      path: 'profile.data',
      action: setProfile,
      normalizer: normalizeProfile
    },
    {
      query: GET_POST_BY_SLUG_QUERY,
      variables: { slug: context.params.slug },
      path: 'postDetail.data',
      action: setPostSelected,
      normalizer: normalizePostBySlug
    }
  ])

PostDetailPage.displayName = 'PostDetailPage'

PostDetailPage.getLayout = (page: ReactElement) => {
  return (
    <>
      <SiteHead />
      <SiteLayout>{page}</SiteLayout>
    </>
  )
}

export default PostDetailPage

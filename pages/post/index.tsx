import { GetServerSideProps } from 'next'
import { ReactElement } from 'react'

import { PostPageTemplate, SiteHead, SiteLayout } from '@/components'
import { GET_PROFILE_QUERY, LIST_POSTS_SUMMARY_QUERY } from '@/queries'
import { setList as setPostList } from '@/store/slices/postSlice'
import { set as setProfile } from '@/store/slices/profileSlice'
import { getServerSidePropsForPublicPage } from '@/utils/pages'
import { normalizePosts } from '@/utils/post'
import { normalizeProfile } from '@/utils/profile'

export const PostPage = () => <PostPageTemplate />

export const getServerSideProps: GetServerSideProps = async (context) =>
  getServerSidePropsForPublicPage(context, [
    {
      query: GET_PROFILE_QUERY,
      path: 'profile.data',
      action: setProfile,
      normalizer: normalizeProfile
    },
    {
      query: LIST_POSTS_SUMMARY_QUERY,
      path: 'posts.data',
      action: setPostList,
      normalizer: normalizePosts
    }
  ])

PostPage.displayName = 'PostPage'

PostPage.getLayout = (page: ReactElement) => {
  return (
    <>
      <SiteHead />
      <SiteLayout>{page}</SiteLayout>
    </>
  )
}

export default PostPage

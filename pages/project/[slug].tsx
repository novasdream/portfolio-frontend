import { GetServerSideProps } from 'next'
import { ReactElement } from 'react'

import { ProjectDetailTemplate, SiteHead, SiteLayout } from '@/components'
import { GET_PROFILE_QUERY, GET_PROJECT_BY_SLUG_QUERY } from '@/queries'
import { set as setProfile } from '@/store/slices/profileSlice'
import { setSelected as setProjectSelected } from '@/store/slices/projectSlice'
import { getServerSidePropsForPublicPage } from '@/utils/pages'
import { normalizeProfile } from '@/utils/profile'
import { normalizeProjectBySlug } from '@/utils/project'

export interface IProjectDetailPageProps {}

export const ProjectDetailPage = () => {
  return <ProjectDetailTemplate />
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
      query: GET_PROJECT_BY_SLUG_QUERY,
      variables: { slug: context.params.slug },
      path: 'projectDetail.data',
      action: setProjectSelected,
      normalizer: normalizeProjectBySlug
    }
  ])

ProjectDetailPage.displayName = 'ProjectDetailPage'

ProjectDetailPage.getLayout = (page: ReactElement) => {
  return (
    <>
      <SiteHead />
      <SiteLayout>{page}</SiteLayout>
    </>
  )
}

export default ProjectDetailPage

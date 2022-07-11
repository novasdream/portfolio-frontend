import { GetServerSideProps } from 'next'
import { ReactElement } from 'react'

import { ProjectPageTemplate, SiteHead, SiteLayout } from '@/components'
import { GET_PROFILE_QUERY, LIST_PROJECTS_SUMMARY_QUERY } from '@/queries'
import { set as setProfile } from '@/store/slices/profileSlice'
import { setList as setProjectList } from '@/store/slices/projectSlice'
import { getServerSidePropsForPublicPage } from '@/utils/pages'
import { normalizeProfile } from '@/utils/profile'
import { normalizeProjects } from '@/utils/project'

export const ProjectPage = () => <ProjectPageTemplate />

export const getServerSideProps: GetServerSideProps = async (context) =>
  getServerSidePropsForPublicPage(context, [
    {
      query: GET_PROFILE_QUERY,
      path: 'profile.data',
      action: setProfile,
      normalizer: normalizeProfile
    },
    {
      query: LIST_PROJECTS_SUMMARY_QUERY,
      path: 'projects.data',
      action: setProjectList,
      normalizer: normalizeProjects
    }
  ])

ProjectPage.displayName = 'ProjectPage'

ProjectPage.getLayout = (page: ReactElement) => {
  return (
    <>
      <SiteHead />
      <SiteLayout>{page}</SiteLayout>
    </>
  )
}

export default ProjectPage

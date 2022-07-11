import { memo } from 'react'

import { ProjectSummaryListSection } from '@/components'

export const ProjectPageTemplate = memo(() => {
  return (
    <>
      <ProjectSummaryListSection />
    </>
  )
})

ProjectPageTemplate.displayName = 'ProjectPageTemplate'

export default ProjectPageTemplate

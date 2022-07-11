import { FC, memo } from 'react'

import { Col, Container, ProjectSummary, SectionTitle } from '@/components'
import { useProjectSummaryList } from '@/hooks'

export interface IProjectSummaryListSectionProps {}

export const ProjectSummaryListSection: FC<IProjectSummaryListSectionProps> =
  memo(() => {
    const { projects } = useProjectSummaryList()

    return (
      <section className="flex pt-14 lg:pt-[4rem] pb-2 lg:pb-[4rem] section">
        <Container className="flex flex-col lg:flex-row items-start">
          <Col>
            <SectionTitle title="Projects ✍️" />

            {projects?.map((project) => (
              <ProjectSummary
                key={project.slug}
                pathPrefix="/project"
                project={project}
              />
            ))}
          </Col>
        </Container>
      </section>
    )
  })

ProjectSummaryListSection.displayName = 'ProjectSummaryListSection'

export default ProjectSummaryListSection

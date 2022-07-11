import { FC, memo } from 'react'

import { Col, Container, ProjectSummary, SectionTitle } from '@/components'
import { useHomeFeaturedProjects } from '@/hooks'

export interface IHomeFeaturedProjectsSectionProps {}

export const HomeFeaturedProjectsSection: FC<IHomeFeaturedProjectsSectionProps> =
  memo(() => {
    const { visible, featuredProjects } = useHomeFeaturedProjects()

    return (
      <section className="flex pt-6 lg:pt-[4rem] pb-6 lg:pb-[4rem] section">
        <Container className="flex flex-col lg:flex-row items-start">
          <Col className="!px-0 w-full divide-y divide-[#333333]">
            <SectionTitle title="Featured Projects 📚" />

            {featuredProjects.map((project) => (
              <ProjectSummary
                key={project.slug}
                pathPrefix="/project"
                project={project}
              />
            ))}

            {!visible && (
              <p className="py-4 font-display text-white">
                No featured project available yet...
              </p>
            )}
          </Col>
        </Container>
      </section>
    )
  })

HomeFeaturedProjectsSection.displayName = 'HomeFeaturedProjectsSection'

export default HomeFeaturedProjectsSection

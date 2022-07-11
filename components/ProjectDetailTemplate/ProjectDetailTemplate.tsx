import { memo } from 'react'
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux'

import {
  Article,
  Col,
  Container,
  Cover,
  PageSubtitle,
  PageTitle
} from '@/components'
import { projectSelectedSelector } from '@/store/slices/projectSlice'

export const ProjectDetailTemplate = memo(() => {
  const project = useSelector(projectSelectedSelector)

  return (
    <section className="flex pt-14 lg:pt-[4rem] pb-2 lg:pb-[4rem] section">
      <Container className="flex flex-col lg:flex-row items-start">
        <Col>
          <Article>
            <PageTitle title={project.title} />
            <PageSubtitle title={project.description} />
            <Cover
              src={project.cover}
              className="w-full h-[10rem] lg:h-[30rem] "
            />
            <ReactMarkdown className="react-mark-down-wrapper">
              {project.content}
            </ReactMarkdown>
          </Article>
        </Col>
      </Container>
    </section>
  )
})

ProjectDetailTemplate.displayName = 'ProjectDetailTemplate'

export default ProjectDetailTemplate

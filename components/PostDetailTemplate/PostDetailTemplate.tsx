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
import { postSelectedSelector } from '@/store/slices/postSlice'

export const PostDetailTemplate = memo(() => {
  const post = useSelector(postSelectedSelector)

  return (
    <section className="flex pt-14 lg:pt-[4rem] pb-2 lg:pb-[4rem] section">
      <Container className="flex flex-col lg:flex-row items-start">
        <Col>
          <Article className='max-w-[50rem]'>
            <PageTitle title={post.title} />
            <PageSubtitle title={post.description} />
            <Cover
              src={post.cover}
              className="w-full h-[10rem] lg:h-[30rem] "
            />
            <ReactMarkdown className="react-mark-down-wrapper">
              {post.content}
            </ReactMarkdown>
          </Article>
        </Col>
      </Container>
    </section>
  )
})

PostDetailTemplate.displayName = 'PostDetailTemplate'

export default PostDetailTemplate

import { FC, memo } from 'react'

import { Col, Container, PostSummary, SectionTitle } from '@/components'
import { usePostSummaryList } from '@/hooks'

export interface IPostSummaryListSectionProps {}

export const PostSummaryListSection: FC<IPostSummaryListSectionProps> = memo(
  () => {
    const { visible, posts } = usePostSummaryList()

    return (
      <section className="flex pt-14 lg:pt-[4rem] pb-2 lg:pb-[4rem] section">
        <Container className="flex flex-col lg:flex-row items-start">
          <Col>
            <SectionTitle title="Posts ✍️" />

            {posts?.map((post) => (
              <PostSummary key={post.slug} pathPrefix="/post" post={post} />
            ))}

            {!visible && (
              <p className="py-4 font-display text-white">
                No post available yet...
              </p>
            )}
          </Col>
        </Container>
      </section>
    )
  }
)

PostSummaryListSection.displayName = 'PostSummaryListSection'

export default PostSummaryListSection

import { memo } from 'react'

import { Col, Container, PostSummary, SectionTitle } from '@/components'
import { useHomeFeaturedPosts } from '@/hooks'

export const HomeFeaturedPostsSection = memo(() => {
  const { visible, featuredPosts } = useHomeFeaturedPosts()

  return (
    <section className="flex pt-6 lg:pt-[4rem] pb-6 lg:pb-[4rem] section">
      <Container className="flex flex-col lg:flex-row items-start">
        <Col className="!px-0 w-full divide-y divide-[#333333]">
          <SectionTitle title="Featured Posts ✍️" />

          {featuredPosts?.map((post) => (
            <PostSummary key={post.slug} pathPrefix="/post" post={post} />
          ))}

          {!visible && (
            <p className="py-4 font-display text-white">
              No featured post available yet...
            </p>
          )}
        </Col>
      </Container>
    </section>
  )
})

HomeFeaturedPostsSection.displayName = 'HomeFeaturedPostsSection'

export default HomeFeaturedPostsSection

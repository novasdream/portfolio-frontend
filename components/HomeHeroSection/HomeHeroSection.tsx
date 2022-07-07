import { memo } from 'react'
import ReactMarkdown from 'react-markdown'

import { Col, Container, SocialLinks } from '@/components'
import { useHomeHero } from '@/hooks'

export const HomeHeroSection = memo(() => {
  const { profile, content } = useHomeHero()

  return (
    <section className="flex pt-[75px] lg:pt-[83px] pb-[67px] min-h-screen section">
      <Container className="flex flex-col lg:flex-row items-start pt-14 lg:pt-[8rem] pb-14 lg:pb-[8rem] ">
        <Col>
          <h1 className="mb-4 font-display text-2xl lg:text-5xl font-black text-white">
            <span className="font-display text-primary">Hello,</span> I am{' '}
            {profile?.firstName} 👋
          </h1>

          <h2 className="mb-6 max-w-[40rem] font-body text-base lg:text-lg font-bold text-gray-2">
            {profile?.bio}
          </h2>

          <SocialLinks className="flex flex-row mb-30 lg:mb-[10rem] space-x-6" />

          {content && (
            <ReactMarkdown className="react-mark-down-wrapper">
              {content}
            </ReactMarkdown>
          )}
        </Col>
      </Container>
    </section>
  )
})

HomeHeroSection.displayName = 'HomeHeroSection'

export default HomeHeroSection

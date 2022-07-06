import { FC, memo } from 'react'
import { useSelector } from 'react-redux'

import { Col, Container } from '@/components'
import { profileSelector } from '@/store/slices/profileSlice'

export interface IHomeHeroSectionProps {}

export const HomeHeroSection: FC<IHomeHeroSectionProps> = memo(() => {
  const profile = useSelector(profileSelector)

  return (
    <section className="flex pt-[75px] lg:pt-[83px] pb-[67px] min-h-screen section">
      <Container className="flex flex-col lg:flex-row items-start pt-20 lg:pt-[12.5rem]">
        <Col>
          <h1 className="mb-4 font-display text-3xl lg:text-5xl font-black text-white">
            <span className="font-display text-primary">Hello,</span> I am{' '}
            {profile?.firstName} 👋
          </h1>

          <h2 className="max-w-[40rem] font-body text-lg lg:text-xl font-bold text-gray-2">
            {profile?.bio}
          </h2>
        </Col>
      </Container>
    </section>
  )
})

HomeHeroSection.displayName = 'HomeHeroSection'

export default HomeHeroSection

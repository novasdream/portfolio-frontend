import { FC, memo } from 'react'

import { Container } from '@/components'

export interface IHomeHeroSectionProps {}

export const HomeHeroSection: FC<IHomeHeroSectionProps> = memo(() => {
  return (
    <section className="flex justify-center items-center pt-[75px] lg:pt-[83px] pb-[67px] min-h-screen section">
      <Container className="flex flex-col lg:flex-row justify-around items-center">
        <h1 className="font-display text-5xl font-black text-white">
          <span className="text-primary">Hello,</span>
          <br />
        </h1>
      </Container>
    </section>
  )
})

HomeHeroSection.displayName = 'HomeHeroSection'

export default HomeHeroSection

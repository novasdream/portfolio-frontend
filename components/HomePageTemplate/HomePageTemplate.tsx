import { memo } from 'react'

import { HomeHeroSection } from '@/components'

export const HomePageTemplate = memo(() => {
  return (
    <>
      <HomeHeroSection />
    </>
  )
})

HomePageTemplate.displayName = 'HomePageTemplate'

export default HomePageTemplate

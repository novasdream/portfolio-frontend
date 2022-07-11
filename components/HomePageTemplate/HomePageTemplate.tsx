import { memo } from 'react'

import {
  HomeFeaturedPostsSection,
  HomeFeaturedProjectsSection,
  HomeHeroSection
} from '@/components'

export const HomePageTemplate = memo(() => {
  return (
    <>
      <HomeHeroSection />
      <HomeFeaturedPostsSection />
      <HomeFeaturedProjectsSection />
    </>
  )
})

HomePageTemplate.displayName = 'HomePageTemplate'

export default HomePageTemplate

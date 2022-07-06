import { FC, memo } from 'react'

import { HomeHeroSection } from '@/components'

export interface IHomePageTemplateProps {}

export const HomePageTemplate: FC<IHomePageTemplateProps> = memo(
  ({}: IHomePageTemplateProps) => {
    return (
      <>
        <HomeHeroSection />
        <HomeHeroSection />
        <HomeHeroSection />
      </>
    )
  }
)

HomePageTemplate.displayName = 'HomePageTemplate'

export default HomePageTemplate

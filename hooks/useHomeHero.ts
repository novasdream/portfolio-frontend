import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { homePageSelector } from '@/store/slices/homePageSlice'
import { profileSelector } from '@/store/slices/profileSlice'

export const useHomeHero = () => {
  const profile = useSelector(profileSelector)

  const homePageContent = useSelector(homePageSelector)

  useEffect(() => {
    document
      .querySelectorAll('.react-mark-down-wrapper a')
      .forEach((element: HTMLAnchorElement) => {
        element.target = '_blank'
      })
  }, [])

  return {
    profile,
    content: homePageContent?.heroContent
  }
}

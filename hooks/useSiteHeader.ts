import { useState } from 'react'
import { useSelector } from 'react-redux'

import { useWindowSize } from '@/hooks'
import { profileSelector } from '@/store/slices/profileSlice'
import { INavItem } from '@/types'

export const useSiteHeader = () => {
  const profile = useSelector(profileSelector)

  const { isMobile } = useWindowSize()

  const [isExpandMenu, setIsExpandMenu] = useState<boolean>(false)
  const [activeItem, setActiveItem] = useState<INavItem>(null)

  const toggleMainNavItem = (item: INavItem) => {
    setActiveItem(item)
    setIsExpandMenu(false)
  }

  return {
    isMobile,
    isExpandMenu,
    setIsExpandMenu,
    activeItem,
    setActiveItem,
    toggleMainNavItem,
    resume: profile?.resume
  }
}

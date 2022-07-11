import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { postFeaturedListSelector } from '@/store/slices/postSlice'

export const useHomeFeaturedPosts = () => {
  const featuredPosts = useSelector(postFeaturedListSelector)

  const visible = useMemo(() => featuredPosts?.length !== 0, [featuredPosts])

  return {
    featuredPosts,
    visible
  }
}

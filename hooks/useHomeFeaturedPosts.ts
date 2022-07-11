import { useSelector } from 'react-redux'

import { postFeaturedListSelector } from '@/store/slices/postSlice'

export const useHomeFeaturedPosts = () => {
  const featuredPosts = useSelector(postFeaturedListSelector)

  return {
    featuredPosts
  }
}

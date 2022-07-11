import { useSelector } from 'react-redux'

import { postListSelector } from '@/store/slices/postSlice'

export const usePostSummaryList = () => {
  const posts = useSelector(postListSelector)

  return {
    posts
  }
}

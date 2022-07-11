import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { postListSelector } from '@/store/slices/postSlice'

export const usePostSummaryList = () => {
  const posts = useSelector(postListSelector)

  const visible = useMemo(() => posts?.length !== 0, [posts])

  return {
    posts,
    visible
  }
}

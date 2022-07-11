import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { projectFeaturedListSelector } from '@/store/slices/projectSlice'

export const useHomeFeaturedProjects = () => {
  const featuredProjects = useSelector(projectFeaturedListSelector)

  const visible = useMemo(
    () => featuredProjects?.length !== 0,
    [featuredProjects]
  )

  return { featuredProjects, visible }
}

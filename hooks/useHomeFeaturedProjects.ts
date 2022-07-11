import { useSelector } from 'react-redux'

import { projectFeaturedListSelector } from '@/store/slices/projectSlice'

export const useHomeFeaturedProjects = () => {
  const featuredProjects = useSelector(projectFeaturedListSelector)

  return { featuredProjects }
}

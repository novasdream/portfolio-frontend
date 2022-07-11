import { useSelector } from 'react-redux'

import { projectListSelector } from '@/store/slices/projectSlice'

export const useProjectSummaryList = () => {
  const projects = useSelector(projectListSelector)

  return {
    projects
  }
}

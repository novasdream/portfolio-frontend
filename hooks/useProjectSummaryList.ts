import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { projectListSelector } from '@/store/slices/projectSlice'

export const useProjectSummaryList = () => {
  const projects = useSelector(projectListSelector)

  const visible = useMemo(() => projects?.length !== 0, [projects])

  return {
    projects,
    visible
  }
}

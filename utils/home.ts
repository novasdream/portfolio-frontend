import { IHomePage, IRawHomePage } from '@/types'

export const normalizeHomePage = (raw: IRawHomePage): IHomePage => ({
  heroContent: raw?.attributes?.heroContent || ''
})

import { IProfile, IRawProfile } from '@/types'

export const normalizeProfile = (raw: IRawProfile): IProfile => ({
  firstName: raw?.attributes?.firstName || '',
  lastName: raw?.attributes?.lastName || '',
  email: raw?.attributes?.email || '',
  headline: raw?.attributes?.headline || '',
  bio: raw?.attributes?.bio || '',
  country: raw?.attributes?.country || '',
  state: raw?.attributes?.state || '',
  city: raw?.attributes?.city || '',
  address: raw?.attributes?.address || '',
  avatar: raw?.attributes?.avatar?.attributes?.url || ''
})

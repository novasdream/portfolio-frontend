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
  calendly: raw?.attributes?.calendly || '',
  linkedin: raw?.attributes?.linkedin || '',
  google: raw?.attributes?.google || '',
  github: raw?.attributes?.github || '',
  stackoverflow: raw?.attributes?.stackoverflow || '',
  avatar: raw?.attributes?.avatar?.data?.attributes?.url || '',
  resume: raw?.attributes?.resume?.data?.attributes?.url || ''
})

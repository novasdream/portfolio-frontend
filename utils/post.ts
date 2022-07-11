import { IPost, IRawPost } from '@/types'

export const normalizePost = (raw: IRawPost): IPost => ({
  id: raw.id,
  title: raw?.attributes?.title,
  description: raw?.attributes?.description,
  readTimeMins: raw?.attributes?.readTimeMins || null,
  slug: raw?.attributes?.slug,
  date: raw?.attributes?.date || '',
  content: raw?.attributes?.content || '',
  cover: raw?.attributes?.cover?.data?.attributes?.url || '',
  tags: []
})

export const normalizePosts = (raws: IRawPost[]): IPost[] =>
  raws?.map((raw) => normalizePost(raw)) ?? []

export const normalizePostBySlug = (raws: IRawPost[]): IPost =>
  normalizePosts(raws)[0] ?? null

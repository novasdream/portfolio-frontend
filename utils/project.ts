import { IProject, IRawProject } from '@/types'

export const normalizeProject = (raw: IRawProject): IProject => ({
  id: raw.id,
  title: raw?.attributes?.title,
  description: raw?.attributes?.description,
  slug: raw?.attributes?.slug,
  link: raw?.attributes?.link ?? '',
  content: raw?.attributes?.content,
  cover: raw?.attributes?.cover?.data?.attributes?.url ?? '',
  tags: []
})

export const normalizeProjects = (raws: IRawProject[]): IProject[] =>
  raws?.map((raw) => normalizeProject(raw)) ?? []

export const normalizeProjectBySlug = (raws: IRawProject[]): IProject =>
  normalizeProjects(raws)[0] ?? null

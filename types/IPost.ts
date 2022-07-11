export interface IPost {
  id: string
  title: string
  description: string
  slug: string
  date?: string
  cover?: string
  tags?: string[]
  readTimeMins?: number
  content?: string
}

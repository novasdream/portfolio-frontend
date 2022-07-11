import { IRawUploadFile } from '@/types'

export interface IRawPost {
  id: string
  attributes: {
    title: string
    description: string
    slug: string
    date?: string
    tags?: string[]
    readTimeMins?: number
    content?: string
    cover?: IRawUploadFile
  }
}

import { IRawUploadFile } from '@/types'

export interface IRawProject {
  id: string
  attributes: {
    title: string
    description: string
    slug: string
    link?: string
    tags?: string[]
    readTimeMins?: number
    content?: string
    cover?: IRawUploadFile
  }
}

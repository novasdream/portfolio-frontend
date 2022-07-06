export interface IRawUploadFile {
  id?: number
  __typename?: string
  attributes: {
    name?: string
    caption?: string
    alternativeText?: string
    mime?: string
    url: string
  }
}

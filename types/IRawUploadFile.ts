export interface IRawUploadFile {
  id?: number
  __typename?: string
  data: {
    attributes: {
      name?: string
      caption?: string
      alternativeText?: string
      mime?: string
      url: string
    }
  }
}

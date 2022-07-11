import { IHomePage, IPost, IProfile, IProject } from '@/types'

export interface IStoreState extends Record<string, unknown> {
  profile: {
    value: IProfile
  }
  homePage: {
    value: IHomePage
  }
  post: {
    list: IPost[]
    featuredList: IPost[]
    selected: IPost
  }
  project: {
    list: IProject[]
    featuredList: IProject[]
    selected: IProject
  }
}

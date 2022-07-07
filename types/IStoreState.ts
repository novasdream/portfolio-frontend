import { IHomePage, IProfile } from '@/types'

export interface IStoreState extends Record<string, unknown> {
  profile: {
    value: IProfile
  }
  homePage: {
    value: IHomePage
  }
}

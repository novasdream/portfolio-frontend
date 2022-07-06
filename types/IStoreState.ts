import { IProfile } from '@/types'

export interface IStoreState extends Record<string, unknown> {
  profile: {
    value: IProfile
  }
}

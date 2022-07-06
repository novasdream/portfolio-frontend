export interface INavItem {
  key: string
  title: string
  url?: string
  isGroup?: boolean
  divider?: boolean
  subItems?: INavItem[]
  external?: string
  target?: string
}

import { INavItem } from '@/types'

export const META_DEFAULTS = {
  title: 'Alex Jin',
  description: 'Senior Software Architect',
  url: process.env.VERCEL_URL
}

export const PATHS = {
  BASE: '/',
  EXPERIENCE: '/work-experience',
  PROJECT: '/project',
  POST: '/post',
  CONTACT: '/contact',
  ERROR: '/500'
}

export const MAIN_NAV_ITEMS: INavItem[] = [
  // {
  //   key: 'main-nav-item-key-experience',
  //   title: 'Experience',
  //   url: PATHS.EXPERIENCE
  // },
  {
    key: 'main-nav-item-key-project',
    title: 'Project',
    url: PATHS.PROJECT
  },
  {
    key: 'main-nav-item-key-post',
    title: 'Post',
    url: PATHS.POST
  },
  {
    key: 'main-nav-item-key-contact',
    title: 'Contact',
    url: PATHS.CONTACT
  }
]

export const FOOTER_MENU_ITEMS: INavItem[] = [
  {
    key: 'footer-menu-item-key-experience',
    title: 'Work Experience',
    url: PATHS.EXPERIENCE
  },
  {
    key: 'footer-menu-item-key-project',
    title: 'Project',
    url: PATHS.PROJECT
  },
  {
    key: 'footer-menu-item-key-post',
    title: 'Post',
    url: PATHS.POST
  },
  {
    key: 'footer-menu-item-key-contact',
    title: 'Contact',
    url: PATHS.CONTACT
  }
]

export const ARTICLE_DESCRIPTION_MAX_LENGTH = 250

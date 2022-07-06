import classNames from 'classnames'
import Link from 'next/link'
import { FC, memo } from 'react'

import { INavItem, TTheme } from '@/types'

export interface IFooterMenuProps {
  theme?: TTheme
  menu: INavItem[]
}

export const FooterMenu: FC<IFooterMenuProps> = memo(
  ({ theme = 'light', menu }: IFooterMenuProps) => (
    <div
      className={classNames(
        'flex flex-row justify-around items-center text-sm font-normal lg:space-x-[60px] leading-[22px] max-w-[472px] w-full',
        {
          'text-secondary': theme === 'light',
          'text-white': theme === 'dark'
        }
      )}
    >
      {menu.map((item) => (
        <div key={item.title}>
          {item?.external ? (
            <a
              href={item.url}
              aria-label={
                item?.target === '_blank'
                  ? `${item.title} - opens in new window`
                  : item.title
              }
              target={item?.target}
              className="hover:text-primary"
            >
              {item.title}
            </a>
          ) : (
            <Link href={item.url}>
              <a className="hover:text-primary">{item.title}</a>
            </Link>
          )}
        </div>
      ))}
    </div>
  )
)

FooterMenu.displayName = 'FooterMenu'

export default FooterMenu

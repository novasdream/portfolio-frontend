import classNames from 'classnames'
import Link from 'next/link'
import { FC, memo, ReactNode } from 'react'

import { INavItem } from '@/types'

export interface IMainNavDropdownMenuItemProps {
  item: INavItem
  target?: string
  rel?: string
  external?: boolean
  active?: boolean
  smallOnMobile?: boolean
  handleClick?: (value: INavItem) => void
  children?: ReactNode
}

export const MainNavDropdownMenuItem: FC<IMainNavDropdownMenuItemProps> = memo(
  ({
    item,
    target = '_blank',
    rel = 'noreferrer',
    external = false,
    active = false,
    handleClick,
    children
  }: IMainNavDropdownMenuItemProps) => (
    <li
      key={item.title}
      className={classNames('dropdown-menu-item hover:bg-[#EFF1FC]', {
        'text-primary': active
      })}
      onClick={() => {
        if (handleClick) {
          handleClick(item)
        }
      }}
    >
      {external ? (
        <a
          href={item.url}
          className="flex flex-row px-6 xl:px-4 w-full items-baseline	py-3"
          aria-label={
            target === '_blank'
              ? `${item.title} - opens in new window`
              : item.title
          }
          target={target}
          rel={rel}
        >
          {children}
          {item.title}
        </a>
      ) : (
        <>
          <Link href={item.url}>
            <a className="block py-3 px-6 xl:px-4 w-full">
              {children}
              {item.title}
            </a>
          </Link>
        </>
      )}
    </li>
  )
)

MainNavDropdownMenuItem.displayName = 'MainNavDropdownMenuItem'

export default MainNavDropdownMenuItem

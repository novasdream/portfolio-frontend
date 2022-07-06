import classNames from 'classnames'
import Link from 'next/link'
import { FC, memo, ReactNode } from 'react'

import { ArrowDownIcon, ArrowUpIcon, MainNavDropdownMenu } from '@/components'
import { INavItem } from '@/types'

export interface IMainNavItemProps {
  item: INavItem
  target?: string
  rel?: string
  external?: boolean
  active?: boolean
  smallOnMobile?: boolean
  isDropdownMenuActive?: boolean
  handleClick?: (value: INavItem, dropdownActive?: boolean) => void
  children?: ReactNode
}

export const MainNavItem: FC<IMainNavItemProps> = memo(
  ({
    item,
    target = '_blank',
    rel = 'noreferrer',
    external = false,
    active = false,
    isDropdownMenuActive = false,
    handleClick,
    children
  }: IMainNavItemProps) => (
    <li
      key={item.title}
      className={classNames('nav-item relative', {
        'nav-item-active': active
      })}
      onClick={() => {
        if (handleClick) {
          handleClick(item)
        }
      }}
      onMouseEnter={() => {
        if (handleClick) {
          handleClick(item, true)
        }
      }}
      onMouseLeave={() => {
        if (handleClick) {
          handleClick(item, false)
        }
      }}
    >
      {external ? (
        <a
          href={item.url}
          className="flex flex-row justify-center items-baseline select-none"
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
          {item?.isGroup &&
            (active && isDropdownMenuActive ? (
              <ArrowUpIcon className="ml-2" />
            ) : (
              <ArrowDownIcon className="ml-2" />
            ))}
        </a>
      ) : (
        <>
          <Link href={item.url}>
            <a className="flex justify-center items-center select-none">
              {children}
              {item.title}
              {item?.isGroup &&
                (active && isDropdownMenuActive ? (
                  <ArrowUpIcon className="ml-2" />
                ) : (
                  <ArrowDownIcon className="ml-2" />
                ))}
            </a>
          </Link>
        </>
      )}
      {active && item?.subItems && (
        <MainNavDropdownMenu
          items={item?.subItems}
          active={isDropdownMenuActive}
        />
      )}
    </li>
  )
)

MainNavItem.displayName = 'MainNavItem'

export default MainNavItem

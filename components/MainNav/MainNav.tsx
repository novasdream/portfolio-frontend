import classNames from 'classnames'
import { FC, memo } from 'react'

import { CloseButton, MainNavItem, SiteLogo } from '@/components'
import { MAIN_NAV_ITEMS } from '@/configs/misc'
import { INavItem } from '@/types'

export interface IMainNavProps {
  isShown: boolean
  setIsShown: (value: boolean) => void
  activeItem: INavItem
  toggleMainNavItem: (value: INavItem) => void
}

export const MainNav: FC<IMainNavProps> = memo(
  ({ isShown, setIsShown, activeItem, toggleMainNavItem }: IMainNavProps) => {
    return (
      <nav
        className={classNames(
          'motion-reduce:animate-none animate-slide-in-left fixed inset-0 pb-16 lg:animate-none lg:flex lg:flex-grow lg:items-center lg:pt-0 lg:py-0 lg:static lg:ml-30 bg-secondary lg:bg-transparent lg:flex-grow',
          {
            hidden: !isShown
          }
        )}
      >
        <div className="flex lg:hidden justify-between items-center py-4 px-5 border-b border-[#262C50]">
          <SiteLogo />

          <CloseButton
            width={15}
            height={15}
            colorHex="#fff"
            className="lg:hidden w-3 h-3"
            onClick={() => setIsShown(false)}
          />
        </div>

        <div className="lg:mb-0 lg:ml-auto">
          <ul className="flex flex-col lg:flex-row lg:mr-auto">
            {MAIN_NAV_ITEMS?.map((item) => (
              <MainNavItem
                key={item?.key}
                item={item}
                active={item.key === activeItem?.key}
                handleClick={toggleMainNavItem}
              />
            ))}
          </ul>
        </div>
      </nav>
    )
  }
)

MainNav.displayName = 'MainNav'

export default MainNav

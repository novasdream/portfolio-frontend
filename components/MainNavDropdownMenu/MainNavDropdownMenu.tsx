import classNames from 'classnames'
import { FC, memo } from 'react'

import { Container, Divider, MainNavDropdownMenuItem } from '@/components'
import { INavItem } from '@/types'

export interface IMainNavDropdownMenuProps {
  active?: boolean
  items?: INavItem[]
}

export const MainNavDropdownMenu: FC<IMainNavDropdownMenuProps> = memo(
  ({ active = false, items }: IMainNavDropdownMenuProps) => {
    return (
      <div
        className={classNames(
          'absolute bg-transparent w-auto shadow-sm transition-all duration-400 ease-in-out z-[9999] top-full invisible translate-y-[20px]',
          {
            '!visible !translate-y-0': active
          }
        )}
      >
        <div className="h-[20px] bg-transparent"></div>
        <Container className="flex justify-center items-center !px-0 mx-auto md:min-w-[150px] text-sm font-semibold bg-white rounded-sm flex-no-wrap">
          <ul className="flex flex-col w-full">
            {items?.map((item) => (
              <div key={item.key}>
                {item?.divider && (
                  <Divider className="!my-0 mx-8 bg-[#EBECF1]" />
                )}
                <MainNavDropdownMenuItem item={item} />
              </div>
            ))}
          </ul>
        </Container>
      </div>
    )
  }
)

MainNavDropdownMenu.displayName = 'MainNavDropdownMenu'

export default MainNavDropdownMenu

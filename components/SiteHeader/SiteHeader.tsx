import { FC, memo, useState } from 'react'

import {
  Container,
  Divider,
  MainNav,
  MenuToggleButton,
  Row,
  SiteLogo
} from '@/components'
import { INavItem } from '@/types'

interface ISiteHeaderProps {}

export const SiteHeader: FC<ISiteHeaderProps> = memo(() => {
  const [isExpandMenu, setIsExpandMenu] = useState<boolean>(false)
  const [activeItem, setActiveItem] = useState<INavItem>(null)

  const toggleMainNavItem = (item: INavItem) => {
    setActiveItem(item)
    setIsExpandMenu(false)
  }

  return (
    <header className="lg:flex fixed top-0 z-[9999] lg:justify-between lg:items-center lg:mx-auto w-full bg-secondary lg:bg-transparent backdrop-blur-md lg:flex-no-wrap">
      <Container className="flex flex-col px-5 lg:px-16 w-full lg:flex-no-wrap">
        <Row className="flex justify-between items-center mt-4 lg:mt-4 mb-2 lg:mb-0">
          <SiteLogo />
          <MainNav
            isShown={isExpandMenu}
            setIsShown={setIsExpandMenu}
            activeItem={activeItem}
            toggleMainNavItem={toggleMainNavItem}
          />
          <MenuToggleButton
            onButtonClick={() => setIsExpandMenu(!isExpandMenu)}
          />
        </Row>
        <Row>
          <Divider className="bg-[#333333]" />
        </Row>
      </Container>
    </header>
  )
})

SiteHeader.displayName = 'SiteHeader'

export default SiteHeader

import { FC, memo } from 'react'

import {
  ButtonLink,
  Container,
  Divider,
  DocIcon,
  MainNav,
  MenuToggleButton,
  Row,
  SiteLogo
} from '@/components'
import { useSiteHeader } from '@/hooks'

interface ISiteHeaderProps {}

export const SiteHeader: FC<ISiteHeaderProps> = memo(() => {
  const {
    isMobile,
    isExpandMenu,
    setIsExpandMenu,
    activeItem,
    toggleMainNavItem,
    resume
  } = useSiteHeader()

  return (
    <header className="lg:flex fixed top-0 z-[9999] lg:justify-between lg:items-center lg:mx-auto w-full bg-secondary lg:bg-transparent backdrop-blur-md lg:flex-no-wrap">
      <Container className="flex flex-col px-5 lg:px-16 w-full lg:flex-no-wrap">
        <Row className="flex justify-between items-center mt-4 lg:mt-4 mb-2 lg:mb-0">
          <SiteLogo />

          <div className="flex flex-row items-center space-x-2 lg:space-x-4">
            <MainNav
              isShown={isExpandMenu}
              setIsShown={setIsExpandMenu}
              activeItem={activeItem}
              toggleMainNavItem={toggleMainNavItem}
            />

            {resume && (
              <ButtonLink
                isExternal
                download
                isIcon={isMobile}
                href={resume}
                target="_blank"
                className="py-2 px-2 lg:px-4 text-sm lg:text-base rounded"
              >
                {isMobile ? (
                  <DocIcon width={36} height={24} className="text-white" />
                ) : (
                  'Resume'
                )}
              </ButtonLink>
            )}

            <MenuToggleButton
              onButtonClick={() => setIsExpandMenu(!isExpandMenu)}
            />
          </div>
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

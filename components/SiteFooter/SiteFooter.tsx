import { FC, memo } from 'react'

import { Container, Divider, Row, SocialLinks } from '@/components'

export interface ISiteFooterProps {}

export const SiteFooter: FC<ISiteFooterProps> = memo(() => {
  return (
    <footer className="fixed bottom-0 w-full backdrop-blur-md">
      <Container className="flex flex-col px-5 lg:px-16 w-full lg:flex-no-wrap">
        <Row>
          <Divider className="!my-0 bg-[#333333]" />
        </Row>
        <Row className="flex-row justify-between my-4">
          <span className="font-body text-white">© Betafoenix 2022.</span>
          <SocialLinks className="flex flex-row space-x-4 lg:space-x-10" />
        </Row>
      </Container>
    </footer>
  )
})

SiteFooter.displayName = 'SiteFooter'

export default SiteFooter

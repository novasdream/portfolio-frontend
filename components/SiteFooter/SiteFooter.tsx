import { FC, memo } from 'react'

import { Container, Divider, Row } from '@/components'

export interface ISiteFooterProps {}

export const SiteFooter: FC<ISiteFooterProps> = memo(() => {
  return (
    <footer className="fixed bottom-0 w-full backdrop-blur-md">
      <Container className="flex flex-col !px-0 w-full lg:flex-no-wrap">
        <Row className="px-5 lg:px-16">
          <Divider className="bg-gray-1" />
        </Row>
        <Row className="flex-row justify-between px-5 lg:px-16 my-4">
          <span className="font-body text-white">© Betafoenix 2022.</span>
        </Row>
      </Container>
    </footer>
  )
})

SiteFooter.displayName = 'SiteFooter'

export default SiteFooter

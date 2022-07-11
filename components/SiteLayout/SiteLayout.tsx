import classNames from 'classnames'
import { FC, memo, ReactNode } from 'react'

import { Container, SiteFooter, SiteHeader } from '@/components'

export interface ISiteLayoutProps {
  children?: ReactNode
  className?: string
}

export const SiteLayout: FC<ISiteLayoutProps> = memo(
  ({ children, className }: ISiteLayoutProps) => (
    <>
      <SiteHeader />
      <main className="bg-secondary">
        <Container
          className={classNames(
            'flex flex-col min-h-screen px-5 lg:px-16 pt-[75px] lg:pt-[83px] pb-[67px]',
            className
          )}
        >
          {children}
        </Container>
      </main>
      <SiteFooter />
    </>
  )
)

SiteLayout.displayName = 'SiteLayout'

export default SiteLayout

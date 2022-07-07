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
      <main
        className={classNames(
          'flex flex-col min-h-screen bg-secondary',
          className
        )}
      >
        <Container className="px-5 lg:px-16">{children}</Container>
      </main>
      <SiteFooter />
    </>
  )
)

SiteLayout.displayName = 'SiteLayout'

export default SiteLayout

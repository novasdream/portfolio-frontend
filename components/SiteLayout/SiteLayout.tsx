import classNames from 'classnames'
import { FC, memo, ReactNode } from 'react'

import { SiteFooter, SiteHeader } from '@/components'

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
          'flex flex-col min-h-screen bg-secondary px-5 lg:px-16',
          className
        )}
      >
        {children}
      </main>
      <SiteFooter />
    </>
  )
)

SiteLayout.displayName = 'SiteLayout'

export default SiteLayout

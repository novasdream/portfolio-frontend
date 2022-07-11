import classNames from 'classnames'
import Link from 'next/link'
import { FC, memo, ReactNode } from 'react'

export interface IPlainLinkProps {
  href: string
  isExternal?: boolean
  target?: string
  children?: ReactNode
  className?: string
}

export const PlainLink: FC<IPlainLinkProps> = memo(
  ({
    href,
    isExternal = false,
    target = '_self',
    children,
    className
  }: IPlainLinkProps) => {
    return (
      <>
        {isExternal ? (
          <a
            className={classNames('hover:underline', className)}
            href={href}
            target={target}
          >
            {children}
          </a>
        ) : (
          <Link href={href}>
            <a className={classNames('hover:underline', className)}>
              {children}
            </a>
          </Link>
        )}
      </>
    )
  }
)

PlainLink.displayName = 'PlainLink'

export default PlainLink

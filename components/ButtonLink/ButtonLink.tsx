import classNames from 'classnames'
import Link from 'next/link'
import { FC, LinkHTMLAttributes, memo, RefObject, useMemo } from 'react'

export interface IButtonLinkProps
  extends LinkHTMLAttributes<HTMLAnchorElement> {
  btnRef?: RefObject<HTMLAnchorElement>
  href: string
  theme?: 'primary' | 'outline-rounded'
  isExternal?: boolean
  isIcon?: boolean
  target?: string
  className?: string
  download?: boolean
}

export const ButtonLink: FC<IButtonLinkProps> = memo(
  ({
    btnRef,
    href,
    children,
    theme = 'primary',
    className = '',
    isExternal = false,
    isIcon = false,
    target = '_self',
    ...props
  }) => {
    const linkClassName = useMemo(
      () =>
        classNames('btn', className, {
          btn_primary: theme === 'primary',
          'btn_outline-rounded': theme === 'outline-rounded'
        }),
      [className, theme]
    )

    if (isExternal) {
      return (
        <a
          ref={btnRef}
          href={href}
          className={isIcon ? '' : linkClassName}
          aria-label={target === '_blank' ? 'opens in new window' : ''}
          target={target}
          rel={target === '_blank' ? 'noopener' : ''}
          {...props}
        >
          {children}
        </a>
      )
    }

    return (
      <Link href={href}>
        <a ref={btnRef} className={linkClassName} {...props}>
          {children}
        </a>
      </Link>
    )
  }
)

ButtonLink.displayName = 'ButtonLink'

export default ButtonLink

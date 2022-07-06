import Image from 'next/image'
import Link from 'next/link'
import { FC, memo } from 'react'

export interface ISiteLogoProps {
  width?: number
  height?: number
}

export const SiteLogo: FC<ISiteLogoProps> = memo(
  ({ width = 63, height = 42 }: ISiteLogoProps) => {
    return (
      <Link href="/" passHref>
        <a className="flex items-center">
          <Image
            width={width}
            height={height}
            src="/images/phoenix-logo.png"
            className="animate-pulse"
          />
        </a>
      </Link>
    )
  }
)

SiteLogo.displayName = 'SiteLogo'

export default SiteLogo

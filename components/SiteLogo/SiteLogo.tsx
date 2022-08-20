import Image from 'next/image'
import Link from 'next/link'
import { FC, memo } from 'react'

export interface ISiteLogoProps {
  width?: number
  height?: number
}

export const SiteLogo: FC<ISiteLogoProps> = memo(
  ({ width = 63, height = 63 }: ISiteLogoProps) => {
    return (
      <Link href="/" passHref>
        <a className="flex items-center transition duration-1000 ease-in-out transform hover:scale-125">
          <Image
            width={width}
            height={height}
            src="/images/logo.svg"
            className="animate-pulse"
            alt="logo"
          />
        </a>
      </Link>
    )
  }
)

SiteLogo.displayName = 'SiteLogo'

export default SiteLogo

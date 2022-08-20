import Image from 'next/image'
import Link from 'next/link'
import { FC, memo } from 'react'

export interface ISignatureProps {
  width?: number
  height?: number
}

export const Signature: FC<ISignatureProps> = memo(
  ({ width = 120, height = 32 }: ISignatureProps) => {
    return (
      <Link href="/" passHref>
        <a className="flex items-center transition duration-1000 ease-in-out transform hover:scale-125">
          <Image
            width={width}
            height={height}
            src="/images/signature-primary.png"
            alt="Alex Jin"
          />
        </a>
      </Link>
    )
  }
)

Signature.displayName = 'Signature'

export default Signature

import classNames from 'classnames'
import Image from 'next/image'
import { FC, memo } from 'react'

export interface ICoverProps {
  src: string
  className?: string
}

export const Cover: FC<ICoverProps> = memo(
  ({ src, className }: ICoverProps) => (
    <figure className={classNames('relative mb-8 lg:mb-16', className)}>
      <Image
        src={src}
        objectFit="cover"
        objectPosition="center"
        layout="fill"
        alt="cover"
        className="lg:rounded"
      />
    </figure>
  )
)

Cover.displayName = 'Cover'

export default Cover

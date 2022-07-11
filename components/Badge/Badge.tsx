import classnames from 'classnames'
import { FC, memo } from 'react'

export interface IBadgeProps {
  title: string
  className?: string
}

export const Badge: FC<IBadgeProps> = memo(
  ({ title, className = '' }: IBadgeProps) => (
    <span
      className={classnames(
        'py-1 px-2 lg:px-3 m-1 text-sm font-normal text-white whitespace-nowrap bg-secondary-lighter hover:bg-[#6e6e6e] rounded-[3.125rem] transition duration-500',
        className
      )}
    >
      {title}
    </span>
  )
)

Badge.displayName = 'Badge'

export default Badge

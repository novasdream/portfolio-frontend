import classNames from 'classnames'
import { FC, memo } from 'react'

export interface IArrowUpIconProps {
  width?: number
  height?: number
  colorHex?: string
  className?: string
}

export const ArrowUpIcon: FC<IArrowUpIconProps> = memo(
  ({ width = 12, height = 6, className = '' }: IArrowUpIconProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('arrow-up-icon', className)}
    >
      <path
        d="M1.5 5.25L6 0.75L10.5 5.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
)

ArrowUpIcon.displayName = 'ArrowUpIcon'

export default ArrowUpIcon

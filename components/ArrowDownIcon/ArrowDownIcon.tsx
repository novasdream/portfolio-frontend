import classNames from 'classnames'
import { FC, memo } from 'react'

export interface IArrowDownIconProps {
  width?: number
  height?: number
  colorHex?: string
  className?: string
}

export const ArrowDownIcon: FC<IArrowDownIconProps> = memo(
  ({ width = 12, height = 6, className = '' }: IArrowDownIconProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('arrow-down-icon', className)}
    >
      <path
        d="M1.5 0.75L6 5.25L10.5 0.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
)

ArrowDownIcon.displayName = 'ArrowDownIcon'

export default ArrowDownIcon

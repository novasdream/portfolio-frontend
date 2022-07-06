import { FC, memo } from 'react'

export interface ICloseIconProps {
  width?: number
  height?: number
  colorHex?: string
  className?: string
}

export const CloseIcon: FC<ICloseIconProps> = memo(
  ({
    width = 16,
    height = 16,
    colorHex = '#1f2837',
    className = ''
  }: ICloseIconProps) => (
    <svg
      aria-hidden="true"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.4 1.6001L1.59998 14.4001M14.4 14.4001L1.59998 1.6001"
        stroke={colorHex}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
)

CloseIcon.displayName = 'CloseIcon'

export default CloseIcon

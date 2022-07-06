import { FC, memo } from 'react'

export interface IToggleMenuIconProps {
  width?: number
  height?: number
  colorHex?: string
  className?: string
}

export const ToggleMenuIcon: FC<IToggleMenuIconProps> = memo(
  ({
    width = 22,
    height = 16,
    colorHex = '#ffffff',
    className = ''
  }: IToggleMenuIconProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21 1H1M21 8H1M21 15H1"
        stroke={colorHex}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
)

ToggleMenuIcon.displayName = 'ToggleMenuIcon'

export default ToggleMenuIcon

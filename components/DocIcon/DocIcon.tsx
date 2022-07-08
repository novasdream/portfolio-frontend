import { FC, memo } from 'react'

export interface IDocIconProps {
  width?: number
  height?: number
  className?: string
}

export const DocIcon: FC<IDocIconProps> = memo(
  ({ width = 20, height = 20, className }: IDocIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      height={height}
      className={className}
    >
      <title>Document</title>
      <path
        d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        d="M256 56v120a32 32 0 0032 32h120"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  )
)

DocIcon.displayName = 'DocIcon'

export default DocIcon

import { FC, memo } from 'react'

export interface IStackOverflowIconProps {
  width?: number
  height?: number
  className?: string
}

export const StackOverflowIcon: FC<IStackOverflowIconProps> = memo(
  ({ width = 20, height = 20, className }: IStackOverflowIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      height={height}
      className={className}
    >
      <title>Stackoverflow</title>
      <path d="M392 440V320h40v160H64V320h40v120z" />
      <path d="M149.1 308.77l198.57 40.87 8.4-39.32-198.57-40.87zm26.27-93.12L359.22 300 376 263.76l-183.82-84.84zm50.95-89l156 127.78 25.74-30.52-156-127.78zM328 32l-33.39 23.8 120.82 160.37L448 192zM144 400h204v-40H144z" />
    </svg>
  )
)

StackOverflowIcon.displayName = 'StackOverflowIcon'

export default StackOverflowIcon

import classNames from 'classnames'
import { ButtonHTMLAttributes, FC, memo } from 'react'

import { CloseIcon } from '@/components'

export interface ICloseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number
  height?: number
  colorHex?: string
  className?: string
}

export const CloseButton: FC<ICloseButtonProps> = memo(
  ({
    width = 12,
    height = 12,
    colorHex = '#1f2837',
    className,
    ...props
  }: ICloseButtonProps) => (
    <button
      aria-label="Close"
      className={classNames('select-none', className)}
      {...props}
    >
      <CloseIcon width={width} height={height} colorHex={colorHex} />
    </button>
  )
)

CloseButton.displayName = 'CloseButton'

export default CloseButton

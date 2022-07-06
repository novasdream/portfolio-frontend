import classNames from 'classnames'
import { FC, memo, ReactNode, ReactText } from 'react'

export interface IRadioProps {
  value: ReactText | boolean
  children: ReactNode
  className?: string
}

export const Radio: FC<IRadioProps> = memo(
  ({ value, children, className }: IRadioProps) => (
    <div className={classNames('radio-button', className)} data-value={value}>
      {children}
    </div>
  )
)

Radio.displayName = 'Radio'

export default Radio

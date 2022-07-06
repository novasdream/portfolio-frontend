import classNames from 'classnames'
import { FC, memo } from 'react'

export interface ICheckRoundIconProps {
  width?: number
  height?: number
  className?: string
  isActive?: boolean
}

export const CheckRoundIcon: FC<ICheckRoundIconProps> = memo(
  ({
    width = 24,
    height = 24,
    className = '',
    isActive = false
  }: ICheckRoundIconProps) => (
    <>
      {isActive ? (
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classNames('form-field-checkbox', className, {
            'form-field-checkbox-active': isActive
          })}
        >
          <circle cx="12" cy="12" r="11.5" className="circle-border" />
          <circle cx="12" cy="12" r="8" className="circle-inner" />
        </svg>
      ) : (
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classNames('form-field-checkbox', className, {
            'form-field-checkbox-active': isActive
          })}
        >
          <circle cx="12" cy="12" r="11.5" className="circle-border" />
        </svg>
      )}
    </>
  )
)

CheckRoundIcon.displayName = 'CheckRoundIcon'

export default CheckRoundIcon

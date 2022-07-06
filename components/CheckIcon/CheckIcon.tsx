import classNames from 'classnames'
import { FC, memo } from 'react'

export interface ICheckIconProps {
  width?: number
  height?: number
  className?: string
  isActive?: boolean
}

export const CheckIcon: FC<ICheckIconProps> = memo(
  ({
    width = 24,
    height = 24,
    className = '',
    isActive = false
  }: ICheckIconProps) => (
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
          <rect width="24" height="24" className="rect-inner" />
          <path
            d="M17.3333 8L9.99996 15.3333L6.66663 12"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="path-checkmark"
          />
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
          <path
            d="M0 0V-1H-1V0H0ZM24 0H25V-1H24V0ZM24 24V25H25V24H24ZM0 24H-1V25H0V24ZM0 1H24V-1H0V1ZM23 0V24H25V0H23ZM24 23H0V25H24V23ZM1 24V0H-1V24H1Z"
            className="path-border"
          />
        </svg>
      )}
    </>
  )
)

CheckIcon.displayName = 'CheckIcon'

export default CheckIcon

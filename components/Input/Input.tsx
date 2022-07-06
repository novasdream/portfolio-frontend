import classnames from 'classnames'
import { FC, InputHTMLAttributes } from 'react'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  description?: string
  hasError?: boolean
  isFormField?: boolean
  rounded?: boolean
  className?: string
}

export const Input: FC<IInputProps> = ({
  label,
  description,
  hasError,
  isFormField,
  rounded,
  className,
  ...props
}: IInputProps) => (
  <label>
    {label && (
      <div
        className={classnames({
          'form-label': isFormField
        })}
      >
        {label}
      </div>
    )}

    {description && (
      <div className="mb-2 text-xs text-gray-1">{description}</div>
    )}

    <input
      className={classnames(className, 'disabled:bg-gray-5', {
        'form-field': isFormField,
        'border-danger': hasError,
        'rounded-sm': rounded
      })}
      {...props}
    />
  </label>
)

Input.displayName = 'Input'

export default Input

import classnames from 'classnames'
import { FC, InputHTMLAttributes, ReactNode, useMemo } from 'react'

import { CheckIcon } from '@/components'
import { str2boolean } from '@/utils/misc'

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode
  hasError?: boolean
  isFormField?: boolean
  rounded?: boolean
  className?: string
}

export const Checkbox: FC<ICheckboxProps> = ({
  label,
  hasError,
  isFormField,
  rounded,
  className,
  ...props
}: ICheckboxProps) => {
  const isActive = useMemo(
    () => str2boolean(props.value as string),
    [props.value]
  )

  return (
    <label className="flex flex-row items-center select-none">
      <input className="appearance-none" {...props} />

      <CheckIcon
        className={classnames(className, 'mr-2 disabled:bg-gray-5', {
          'form-field-checkbox': isFormField,
          'border-danger': hasError,
          'rounded-sm': rounded
        })}
        isActive={isActive}
      />

      {label && (
        <div
          className={classnames(
            {
              'form-label': isFormField
            },
            'flex items-center mb-0 font-medium'
          )}
        >
          {label}
        </div>
      )}
    </label>
  )
}

Checkbox.displayName = 'Checkbox'

export default Checkbox

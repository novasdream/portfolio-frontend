import classnames from 'classnames'
import { Field } from 'formik'
import { FC, ReactNode, SelectHTMLAttributes } from 'react'

import { ArrowDownIcon } from '@/components'

export interface IFormSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  children: ReactNode
  label?: string
  description?: string
  rounded?: boolean
}

export const FormSelect: FC<IFormSelectProps> = ({
  name,
  children,
  label,
  description,
  rounded,
  ...props
}: IFormSelectProps) => (
  <Field name={name}>
    {({ field, meta }) => (
      <label>
        {label && <div className="form-label">{label}:</div>}

        {description && (
          <div className="mb-2 text-xs text-gray-1">{description}</div>
        )}

        <div className="relative">
          <ArrowDownIcon className="absolute top-1/2 right-3 transform -translate-y-1" />

          <select
            className={classnames('form-select', {
              'border-danger': meta.touched && meta.error,
              'rounded-sm': rounded
            })}
            {...props}
            {...field}
          >
            {children}
          </select>
        </div>
      </label>
    )}
  </Field>
)

FormSelect.displayName = 'FormSelect'

export default FormSelect

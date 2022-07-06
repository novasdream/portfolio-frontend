import { Field } from 'formik'
import { FC, InputHTMLAttributes, ReactNode } from 'react'

import { Checkbox } from '@/components'

export interface IFormFieldCheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: ReactNode
  description?: string
  title?: string
  rounded?: boolean
}

export const FormFieldCheckbox: FC<IFormFieldCheckboxProps> = ({
  name,
  label,
  rounded,
  ...props
}: IFormFieldCheckboxProps) => (
  <Field name={name}>
    {({ field, meta }) => (
      <Checkbox
        label={label}
        hasError={meta.touched && meta.error}
        isFormField
        rounded={rounded}
        {...props}
        {...field}
      />
    )}
  </Field>
)

FormFieldCheckbox.displayName = 'FormFieldCheckbox'

export default FormFieldCheckbox

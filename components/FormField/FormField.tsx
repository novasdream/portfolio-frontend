import { Field } from 'formik'
import { FC, InputHTMLAttributes } from 'react'

import { Input } from '@/components'

export interface IFormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  description?: string
  title?: string
  rounded?: boolean
}

export const FormField: FC<IFormFieldProps> = ({
  name,
  label,
  description,
  rounded,
  ...props
}: IFormFieldProps) => (
  <Field name={name}>
    {({ field, meta }) => (
      <Input
        description={description}
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

FormField.displayName = 'FormField'

export default FormField

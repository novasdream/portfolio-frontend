import classnames from 'classnames'
import { Field } from 'formik'
import { FC, memo } from 'react'

export interface IFormFieldTextAreaProps {
  name: string
  label?: string
  title?: string
  placeholder?: string
  readOnly?: boolean
  disabled?: boolean
}

export const FormFieldTextArea: FC<IFormFieldTextAreaProps> = memo(
  ({
    name,
    label,
    title,
    placeholder,
    readOnly,
    disabled,
    ...props
  }: IFormFieldTextAreaProps) => (
    <Field name={name}>
      {({ field, meta }) => (
        <label>
          {label && (
            <span className="inline-block p-0 mb-2 form-label">{label}:</span>
          )}

          <textarea
            title={title}
            readOnly={readOnly}
            placeholder={placeholder}
            disabled={disabled}
            className={classnames(
              'block py-2 px-4 w-full min-h-[300px] text-xs font-normal placeholder-gray-2 bg-white',
              'truncate border',
              {
                'border-danger': meta.touched && meta.error,
                'border-gray-2': !meta.touched || !meta.error
              }
            )}
            {...field}
            {...props}
          />
        </label>
      )}
    </Field>
  )
)

FormFieldTextArea.displayName = 'FormFieldTextArea'

export default FormFieldTextArea

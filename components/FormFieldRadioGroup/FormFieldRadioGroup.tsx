import { Field } from 'formik'
import { FC, ReactNode } from 'react'

import { IRadioGroupProps, RadioGroup } from '@/components'

interface IOmittedRadioGroupProps
  extends Omit<IRadioGroupProps, 'value' | 'onChange'> {}

interface IFormFieldRadioGroupProps extends IOmittedRadioGroupProps {
  name: string
  infoButton?: ReactNode
}

export const FormFieldRadioGroup: FC<IFormFieldRadioGroupProps> = (
  props: IFormFieldRadioGroupProps
) => {
  const { name, ...radioGroupProps } = props

  return (
    <Field name={name}>
      {({ field: { value }, form: { setFieldValue } }) => (
        <RadioGroup
          {...(radioGroupProps as IOmittedRadioGroupProps)}
          infoButton={props?.infoButton}
          value={value}
          onChange={(value) => {
            setFieldValue(name, value)
          }}
        />
      )}
    </Field>
  )
}

FormFieldRadioGroup.displayName = 'FormFieldRadioGroup'

export default FormFieldRadioGroup

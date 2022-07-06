import classnames from 'classnames'
import {
  FC,
  ReactElement,
  ReactNode,
  ReactText,
  useEffect,
  useMemo,
  useState
} from 'react'

import { CheckRoundIcon, IRadioProps } from '@/components'

export type TRadioGroupType = 'button-group' | 'radio-group'

export interface IRadioGroupProps {
  type?: TRadioGroupType
  value?: ReactText | boolean
  className?: string
  label?: string
  optionClassName?: string
  infoButton?: ReactNode
  onChange?: <T>(value: T) => void
  children?: ReactElement<IRadioProps>[]
}

export const RadioGroup: FC<IRadioGroupProps> = ({
  type = 'radio-group',
  value,
  className = '',
  label,
  optionClassName = 'text-secondary px-2',
  infoButton,
  onChange = () => null,
  children
}: IRadioGroupProps) => {
  const [currentValue, setCurrentValue] = useState(value)

  useEffect(() => {
    setCurrentValue(value)
  }, [value])

  const activeOption = useMemo(
    () =>
      children.find((child) => child.props.value === currentValue) ??
      children[0],
    [currentValue, children]
  )

  const onOptionSelect = (option: ReactElement<IRadioProps>) => {
    setCurrentValue(option.props.value)
    onChange(option.props.value)
  }

  return (
    <div className={className}>
      {type === 'button-group' ? (
        <>
          {children?.map((child, index) => (
            <button
              key={index}
              className={classnames(
                'flex items-center radio',
                optionClassName,
                {
                  'justify-center select-none': type === 'button-group',
                  'checked font-medium border !border-primary text-primary shadow-sm':
                    type === 'button-group' && child === activeOption
                },
                'min-w-[2.5rem] min-h-[2.5rem]'
              )}
              onClick={() => onOptionSelect(child)}
              type="button"
            >
              {child}
            </button>
          ))}
        </>
      ) : (
        <label>
          {label && (
            <div className="flex items-center form-label">
              {label}
              {infoButton}
            </div>
          )}
          <div>
            <div className="inline-flex">
              {children.map((child, index) => (
                <div
                  key={index}
                  className={classnames(
                    'flex items-center mr-5 radio',
                    optionClassName,
                    'min-w-[2.5rem] min-h-[2.5rem]'
                  )}
                  onClick={() => onOptionSelect(child)}
                >
                  <CheckRoundIcon
                    className="mr-2 motion-reduce:animate-none animate-grow-vertical"
                    isActive={child === activeOption}
                  />
                  <div className="inline-block">{child}</div>
                </div>
              ))}
            </div>
          </div>
        </label>
      )}
    </div>
  )
}

RadioGroup.displayName = 'RadioGroup'

export default RadioGroup

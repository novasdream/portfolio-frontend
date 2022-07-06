import { useState } from 'react'

export const useToggle = (
  initialValue = false
): [value: boolean, toggleValue: () => void] => {
  const [value, setValue] = useState<boolean>(initialValue)

  const toggleValue = () => {
    setValue((previousValue) => !previousValue)
  }

  return [value, toggleValue]
}

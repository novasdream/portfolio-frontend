import { RefObject, useEffect } from 'react'

export const useOnClickOutside = <
  T extends HTMLElement = HTMLElement,
  U extends HTMLElement = HTMLElement
>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void,
  ignoreRefs?: RefObject<U>[]
): void => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current

      if (
        !el ||
        el.contains(event.target as Node) ||
        ignoreRefs?.some((item) =>
          item?.current?.contains(event.target as Node)
        )
      ) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler, ignoreRefs])
}

import { useEffect } from 'react'

export const useOnScroll = (handler: () => void): void => {
  useEffect(() => {
    document.addEventListener('scroll', handler)

    return () => {
      document.removeEventListener('scroll', handler)
    }
  }, [handler])
}

import { RefObject, useRef, useState } from 'react'

import { useOnClickOutside, useOnScroll } from '@/hooks'

export const usePopover = (
  isCloseOnScroll = false
): {
  infoButtonRef: RefObject<HTMLButtonElement>
  popoverRef: RefObject<HTMLDivElement>
  isPopoverVisible: boolean
  showPopover: () => void
  closePopover: () => void
  togglePopover: () => void
} => {
  const infoButtonRef = useRef<HTMLButtonElement>()
  const popoverRef = useRef(null)
  const [isPopoverVisible, setIsPopoverVisible] = useState<boolean>(false)
  const showPopover = () => setIsPopoverVisible(true)
  const closePopover = () => setIsPopoverVisible(false)
  const togglePopover = () => setIsPopoverVisible((value) => !value)

  useOnClickOutside(popoverRef, closePopover, [infoButtonRef])

  useOnScroll(() => {
    if (isCloseOnScroll && isPopoverVisible) {
      closePopover()
    }
  })

  return {
    infoButtonRef,
    popoverRef,
    isPopoverVisible,
    showPopover,
    closePopover,
    togglePopover
  }
}

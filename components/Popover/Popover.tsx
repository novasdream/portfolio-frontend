import classNames from 'classnames'
import { FC, ReactNode, RefObject, useEffect } from 'react'

import { useOnClickOutside, useWindowSize } from '@/hooks'

export type TPopoverPosition = 'top' | 'bottom' | 'left' | 'right'

export interface IPopoverProps {
  children: ReactNode
  forwardRef?: RefObject<HTMLDivElement>
  ignoreRefs?: RefObject<HTMLElement>[]
  toggle?: () => void
  position?: TPopoverPosition
}

const style = { boxShadow: '0px 2px 8px rgba(12, 8, 21, 0.2)' }

export const Popover: FC<IPopoverProps> = ({
  children,
  forwardRef = null,
  toggle = () => null,
  ignoreRefs = [],
  position = 'left'
}: IPopoverProps) => {
  const windowSize = useWindowSize()
  useOnClickOutside(forwardRef, toggle, ignoreRefs)

  useEffect(() => {
    if (!forwardRef.current) {
      return
    }

    const boundingClientRect = forwardRef.current.getBoundingClientRect()

    if (windowSize.isMobile) {
      if (
        boundingClientRect.width + boundingClientRect.left >
        windowSize.width
      ) {
        forwardRef.current.style.marginLeft = 0 - boundingClientRect.left + 'px'
      }
    } else {
      if (boundingClientRect.right > windowSize.width - 20) {
        forwardRef.current.style.marginLeft =
          windowSize.width - 20 - boundingClientRect.right + 'px'
      } else if (boundingClientRect.left < 0) {
        forwardRef.current.style.marginLeft = -boundingClientRect.left + 'px'
      }
    }

    if (
      boundingClientRect.height + boundingClientRect.top >
      windowSize.height
    ) {
      forwardRef.current.style.marginTop =
        windowSize.height - boundingClientRect.bottom + 'px'
    }
  }, [forwardRef, windowSize.height, windowSize.isMobile, windowSize.width])

  return (
    <div
      ref={forwardRef}
      className={classNames('absolute z-10 w-[80vw] md:w-auto', {
        'md:left-1/2 md:transform md:-translate-x-1/2 md:right-auto md:bottom-full mb-1':
          position === 'top',
        'md:left-0 md:right-auto md:top-full mt-3': position === 'bottom',
        'md:right-full md:left-auto md:top-0 md:mr-1': position === 'left',
        'md:left-full md:right-auto md:top-0 md:ml-1': position === 'right'
      })}
    >
      <div
        className="py-1 px-3 bg-white rounded motion-reduce:animate-none animate-grow-vertical"
        style={style}
      >
        {children}
      </div>
    </div>
  )
}

Popover.displayName = 'Popover'

export default Popover

import { FC, memo, ReactNode } from 'react'

import { Popover, TPopoverPosition } from '@/components'
import { usePopover } from '@/hooks'

export interface IPopoverButtonProps {
  position?: TPopoverPosition
  buttonIcon?: ReactNode
  description?: string
}

export const PopoverButton: FC<IPopoverButtonProps> = memo(
  ({ position = 'top', buttonIcon, description }: IPopoverButtonProps) => {
    const {
      infoButtonRef,
      popoverRef,
      isPopoverVisible,
      showPopover,
      togglePopover
    } = usePopover()

    return (
      <button
        ref={infoButtonRef}
        className="inline-flex relative items-center ml-1"
        onMouseEnter={showPopover}
        onClick={togglePopover}
      >
        {buttonIcon}
        {isPopoverVisible && (
          <Popover
            forwardRef={popoverRef}
            toggle={togglePopover}
            ignoreRefs={[infoButtonRef]}
            position={position}
          >
            <div className="md:w-[12.5rem] text-[0.625rem] text-left">
              {description}
            </div>
          </Popover>
        )}
      </button>
    )
  }
)

PopoverButton.displayName = 'PopoverButton'

export default PopoverButton

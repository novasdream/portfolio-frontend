import classNames from 'classnames'
import { FC, memo, MouseEvent, ReactNode, useRef } from 'react'

import { CloseButton, ShadowBackdrop } from '@/components'
import { useOutsideClick } from '@/hooks'

export interface IModalProps {
  children: ReactNode
  toggleModal: (event: MouseEvent<HTMLElement>) => void
  showCloseButton?: boolean
  closeButtonColorHex?: string
  animation?: 'flipInX' | 'none'
  className?: string
}

export const Modal: FC<IModalProps> = memo(
  ({
    children,
    toggleModal,
    showCloseButton = true,
    closeButtonColorHex = '#fff',
    animation = 'flipInX',
    className = 'w-full bg-white max-w-[56.25rem] rounded-lg shadow-2xl overflow-hidden'
  }: IModalProps) => {
    const ref = useRef()

    useOutsideClick(ref, (event) => toggleModal(event))

    return (
      <ShadowBackdrop>
        <div
          ref={ref}
          className={classNames('relative m-auto', className, {
            'motion-reduce:animate-none animate-flip-in-x':
              animation === 'flipInX',
            'animate-none': animation === 'none'
          })}
        >
          {showCloseButton && (
            <CloseButton
              width={20}
              height={20}
              onClick={toggleModal}
              className="absolute top-6 right-6 z-10"
              colorHex={closeButtonColorHex}
            />
          )}
          {children}
        </div>
      </ShadowBackdrop>
    )
  }
)

Modal.displayName = 'Modal'

export default Modal

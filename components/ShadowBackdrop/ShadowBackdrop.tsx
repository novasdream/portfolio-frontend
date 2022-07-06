import { FC, memo, ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export interface IShadowBackdropProps {
  children: ReactNode
}

export const ShadowBackdrop: FC<IShadowBackdropProps> = memo(
  ({ children }: IShadowBackdropProps) => {
    const [container] = useState(document?.createElement('div'))
    container.classList.add('fixed', 'z-40', 'inset-0', 'overflow-y-auto')

    useEffect(() => {
      document?.body?.appendChild(container)

      return () => {
        document?.body?.removeChild(container)
      }
    }, [container])

    return createPortal(
      <>
        <div className="flex relative z-50 w-full h-full">{children}</div>
        <div className="fixed inset-0 z-auto bg-secondary opacity-60" />
      </>,
      container
    )
  }
)

ShadowBackdrop.displayName = 'ShadowBackdrop'

export default ShadowBackdrop

import classNames from 'classnames'
import { FC, memo, ReactNode, ReactText } from 'react'

export interface IContainerProps {
  className?: string
  children?: ReactNode
  style?: Record<string, ReactText>
  role?: string
}

export const Container: FC<IContainerProps> = memo(
  ({ children, className = '', ...props }: IContainerProps) => (
    <div
      className={classNames(
        'container px-3 max-w-screen-xl mx-auto',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)

Container.displayName = 'Container'

export default Container

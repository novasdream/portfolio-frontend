import { FC, memo, ReactNode } from 'react'

export interface IColProps {
  className?: string
  children?: ReactNode
}

export const Col: FC<IColProps> = memo(
  ({ children, className = 'w-full' }: IColProps) => (
    <div className={`${className}`}>{children}</div>
  )
)

Col.displayName = 'Col'

export default Col

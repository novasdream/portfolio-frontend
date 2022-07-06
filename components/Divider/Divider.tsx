import classNames from 'classnames'
import { FC, memo } from 'react'

export interface IDividerProps {
  isVertical?: boolean
  className?: string
}

export const Divider: FC<IDividerProps> = memo(
  ({ isVertical = false, className }: IDividerProps) => {
    return (
      <>
        {isVertical ? (
          <div className={classNames('w-px h-full mx-1', className)}></div>
        ) : (
          <div
            className={classNames(
              'h-px flex items-center my-1 grow w-full',
              className
            )}
          ></div>
        )}
      </>
    )
  }
)

Divider.displayName = 'Divider'

export default Divider

import classNames from 'classnames'
import { FC, memo } from 'react'

export interface IPageTitleProps {
  title: string
  className?: string
}

export const PageTitle: FC<IPageTitleProps> = memo(
  ({ className, title }: IPageTitleProps) => (
    <h1
      className={classNames(
        'mb-4 font-display text-2xl lg:text-5xl font-black text-white',
        className
      )}
    >
      {title}
    </h1>
  )
)

PageTitle.displayName = 'PageTitle'

export default PageTitle

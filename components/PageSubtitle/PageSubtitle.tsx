import classNames from 'classnames'
import { FC, memo } from 'react'

export interface IPageSubtitleProps {
  title: string
  className?: string
}

export const PageSubtitle: FC<IPageSubtitleProps> = memo(
  ({ className, title }: IPageSubtitleProps) => (
    <h2
      className={classNames(
        'mb-6 font-body text-base lg:text-lg font-bold text-gray-2',
        className
      )}
    >
      {title}
    </h2>
  )
)

PageSubtitle.displayName = 'PageSubtitle'

export default PageSubtitle

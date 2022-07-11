import classNames from 'classnames'
import { FC, memo } from 'react'

export interface ISectionTitleProps {
  title: string
  className?: string
}

export const SectionTitle: FC<ISectionTitleProps> = memo(
  ({ title, className }: ISectionTitleProps) => (
    <h3
      className={classNames(
        'font-display text-xl lg:text-2xl pt-4 lg:pt-8 pb-4 lg:pb-8 font-bold text-white',
        className
      )}
    >
      {title}
    </h3>
  )
)

SectionTitle.displayName = 'SectionTitle'

export default SectionTitle

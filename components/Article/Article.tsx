import { FC, memo, ReactNode } from 'react'

export interface IArticleProps {
  children?: ReactNode
  className?: string
}

export const Article: FC<IArticleProps> = memo(
  ({ children, className }: IArticleProps) => (
    <article className={className}>{children}</article>
  )
)

Article.displayName = 'Article'

export default Article

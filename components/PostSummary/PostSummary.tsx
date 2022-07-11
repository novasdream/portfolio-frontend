import Image from 'next/image'
import { FC, memo, useMemo } from 'react'

import { Article, Badge, PlainLink } from '@/components'
import { ARTICLE_DESCRIPTION_MAX_LENGTH } from '@/configs/misc'
import { IPost } from '@/types'
import { formatDatetime } from '@/utils/misc'

export interface IPostSummaryProps {
  pathPrefix: string
  post: IPost
}

export const PostSummary: FC<IPostSummaryProps> = memo(
  ({ pathPrefix, post }: IPostSummaryProps) => {
    const descriptionSliced = useMemo(
      () => post.description.slice(0, ARTICLE_DESCRIPTION_MAX_LENGTH) + '...',
      [post.description]
    )

    const postUrl = useMemo(
      () => `${pathPrefix}/${post.slug}`,
      [post.slug, pathPrefix]
    )

    return (
      <Article className="flex flex-col lg:flex-row lg:justify-between lg:items-start py-4 lg:py-8 text-white">
        <div className="flex flex-col justify-between pr-10">
          <div>
            <div className="mb-4 lg:text-base text-gray-2 text-md">
              {formatDatetime(post.date, 'MMM D, YYYY')}
            </div>
            <PlainLink href={postUrl} className="text-white">
              <h4 className="mb-4 font-display !text-lg font-bold">
                {post.title}
              </h4>
            </PlainLink>
            <h5 className="font-body lg:text-base font-normal text-gray-2 text-md">
              {descriptionSliced}
            </h5>
          </div>

          <div className="flex flex-row flex-wrap items-center mt-4">
            {post.tags?.map((tag) => (
              <Badge key={tag} title={tag} />
            ))}
            {post.readTimeMins && (
              <>
                <span className="mx-1"> · </span>
                {post.readTimeMins && (
                  <span className="text-sm">{post.readTimeMins} min read</span>
                )}
              </>
            )}
          </div>
        </div>

        {post?.cover && (
          <PlainLink href={postUrl}>
            <figure className="relative mt-4 lg:mt-0 w-full lg:w-[20rem] lg:min-w-[20rem] h-[12rem]">
              <Image
                src={post?.cover}
                objectFit="cover"
                layout="fill"
                alt={post.title}
                className="lg:rounded"
              />
            </figure>
          </PlainLink>
        )}
      </Article>
    )
  }
)

PostSummary.displayName = 'PostSummary'

export default PostSummary

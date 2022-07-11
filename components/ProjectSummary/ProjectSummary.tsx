import Image from 'next/image'
import { FC, memo, useMemo } from 'react'

import { Article, Badge, PlainLink } from '@/components'
import { ARTICLE_DESCRIPTION_MAX_LENGTH } from '@/configs/misc'
import { IProject } from '@/types'

export interface IProjectSummaryProps {
  pathPrefix: string
  project: IProject
}

export const ProjectSummary: FC<IProjectSummaryProps> = memo(
  ({ pathPrefix, project }: IProjectSummaryProps) => {
    const descriptionSliced = useMemo(
      () =>
        project.description.slice(0, ARTICLE_DESCRIPTION_MAX_LENGTH) + '...',
      [project.description]
    )

    const postUrl = useMemo(
      () => `${pathPrefix}/${project.slug}`,
      [project.slug, pathPrefix]
    )

    return (
      <Article className="flex flex-col lg:flex-row lg:justify-between lg:items-start py-4 lg:py-8 text-white">
        <div className="flex flex-col justify-between pr-10">
          <div>
            <PlainLink href={postUrl} className="text-white">
              <h4 className="mb-4 font-display !text-lg font-bold">
                {project.title}
              </h4>
            </PlainLink>
            <h5 className="font-body lg:text-base font-normal text-gray-2 text-md">
              {descriptionSliced}
            </h5>
          </div>

          <div className="flex flex-row flex-wrap items-center mt-4">
            {project.tags?.map((tag) => (
              <Badge key={tag} title={tag} />
            ))}
          </div>
        </div>

        {project?.cover && (
          <PlainLink href={postUrl}>
            <figure className="relative mt-4 lg:mt-0 w-full lg:w-[20rem] lg:min-w-[20rem] h-[12rem]">
              <Image
                src={project?.cover}
                objectFit="cover"
                layout="fill"
                alt={project.title}
                className="lg:rounded"
              />
            </figure>
          </PlainLink>
        )}
      </Article>
    )
  }
)

ProjectSummary.displayName = 'ProjectSummary'

export default ProjectSummary

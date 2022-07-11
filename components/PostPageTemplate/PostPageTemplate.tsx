import { FC, memo } from 'react'

import { PostSummaryListSection } from '@/components'

export interface IPostPageTemplateProps {}

export const PostPageTemplate: FC<IPostPageTemplateProps> = memo(() => (
  <>
    <PostSummaryListSection />
  </>
))

PostPageTemplate.displayName = 'PostPageTemplate'

export default PostPageTemplate

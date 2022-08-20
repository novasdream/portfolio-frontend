import Head from 'next/head'
import { FC, memo, useMemo } from 'react'

import { META_DEFAULTS } from '@/configs/misc'

export interface ISiteHeadProps {
  title?: string
  description?: string
}

export const SiteHead: FC<ISiteHeadProps> = memo(
  ({ title, description }: ISiteHeadProps) => {
    const pageTitle = useMemo(
      () =>
        title
          ? `${title} - ${META_DEFAULTS.description}`
          : `${META_DEFAULTS.title} - ${META_DEFAULTS.description}`,
      [title]
    )

    const pageDescription = useMemo(
      () => description ?? META_DEFAULTS.description,
      [description]
    )

    return (
      <Head>
        <title>{pageTitle}</title>

        <meta charSet="utf-8" />
        <meta name="description" content={pageDescription} />

        <meta property="og:url" content={META_DEFAULTS.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />

        {/* <script type="text/javascript">
        (function() {
        window.__insp = window.__insp || [];
        __insp.push(['wid', 1487795457]);
        var ldinsp = function(){
        if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=1487795457&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };
        setTimeout(ldinsp, 0);
        })();
        </script> */}

      </Head>
    )
  }
)

SiteHead.displayName = 'SiteHead'

export default SiteHead

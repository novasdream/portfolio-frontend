import { FC, memo, useMemo } from 'react'

import { useWindowSize } from '@/hooks'

export interface IErrorTemplateProps {}

export const ErrorTemplate: FC<IErrorTemplateProps> = memo(() => {
  const { isMobile, height } = useWindowSize()
  const style = useMemo(
    () => ({
      maxHeight: isMobile ? `${height - 115}px` : `${height - 60}px`,
      minHeight: isMobile ? `${height - 115}px` : `${height - 60}px`
    }),
    [isMobile, height]
  )

  return (
    <main
      className="flex flex-grow justify-center items-center text-secondary bg-[#FAFBFE]"
      style={style}
    >
      <div className="flex flex-col justify-center items-center py-12 md:py-[100px] px-12 md:px-[140px] mx-auto max-w-[80%] bg-white shadow-md">
        <h1 className="mb-4 font-display text-[4rem] md:text-[10rem] font-black tracking-widest	leading-none">
          5<span className="text-[#00B7FF]">0</span>0
        </h1>

        <p className="mx-auto font-body text-base md:text-xl font-medium text-center uppercase">
          Something went wrong
        </p>
      </div>
    </main>
  )
})

ErrorTemplate.displayName = 'ErrorTemplate'

export default ErrorTemplate

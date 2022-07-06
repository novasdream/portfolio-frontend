import { FC, memo, useMemo } from 'react'

import { useWindowSize } from '@/hooks'

export interface IError404TemplateProps {}

export const Error404Template: FC<IError404TemplateProps> = memo(() => {
  const { isMobile, height } = useWindowSize()
  const style = useMemo(
    () => ({
      maxHeight: isMobile ? `${height - 115}px` : `${height - 60}px`,
      minHeight: isMobile ? `${height - 115}px` : `${height - 60}px`
    }),
    [isMobile, height]
  )

  return (
    <div
      className="flex flex-grow justify-center items-center max-h-screen"
      style={style}
    >
      <div className="flex flex-col justify-center items-center py-12 md:py-[100px] px-12 md:px-[140px] mx-auto max-w-[80%]">
        <h1 className="mb-4 font-display text-[4rem] md:text-[10rem] font-black tracking-widest leading-none text-white animate-pulse">
          4<span className="text-primary">0</span>0
        </h1>

        <p className="mx-auto font-body text-base md:text-xl font-medium text-center text-white">
          Page not found
        </p>
      </div>
    </div>
  )
})

Error404Template.displayName = 'Error404Template'

export default Error404Template

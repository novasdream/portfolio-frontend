import { FC, memo } from 'react'

export interface IMaintenanceTemplateProps {}

export const MaintenanceTemplate: FC<IMaintenanceTemplateProps> = memo(() => {
  return (
    <main className="flex flex-grow justify-center items-center min-h-screen bg-secondary">
      <div className="flex flex-col justify-center items-center py-12 md:py-[100px] px-12 md:px-[140px] mx-auto max-w-[80%]">
        <p className="mx-auto font-body text-base md:text-2xl font-medium text-center text-white">
          Under Maintenance
        </p>
      </div>
    </main>
  )
})

MaintenanceTemplate.displayName = 'MaintenanceTemplate'

export default MaintenanceTemplate

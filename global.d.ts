/* eslint-disable @typescript-eslint/no-explicit-any */
type F = (data: Record<string, unknown>) => void

interface Window {
  dataLayer: Record<string, unknown>[]
  Calendly: {
    initPopupWidget: ({ url: string }) => void
    showPopupWidget: (url: string) => void
  }
  __insp: {
    push: (args: any[]) => void
  }
}

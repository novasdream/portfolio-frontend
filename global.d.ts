type F = (data: Record<string, unknown>) => void

interface Window {
  dataLayer: Record<string, unknown>[]
  Calendly: {
    initPopupWidget: ({ url: string }) => void
    showPopupWidget: (url: string) => void
  }
}

export const initCalendlyPopupWidget = (url: string) => {
  if (typeof window === 'undefined') {
    return
  }

  window.Calendly.showPopupWidget(url)
}

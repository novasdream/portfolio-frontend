import { CALENDLY_URL } from '@/configs/env'

export const initCalendlyPopupWidget = () => {
  if (typeof window === 'undefined') {
    return
  }

  window.Calendly.showPopupWidget(CALENDLY_URL)
}

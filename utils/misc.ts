import dayjs from 'dayjs'

export const scrollElementIntoView = (
  selector: string,
  offset: number,
  timeout = 100
) =>
  setTimeout(() => {
    const rect = document?.querySelector(selector)?.getBoundingClientRect()
    window.scrollTo({
      top: rect.top + window.scrollY + offset,
      behavior: 'smooth'
    })
  }, timeout)

export const str2boolean = (val: string): boolean | undefined => {
  try {
    return JSON.parse(val)
  } catch (error) {
    return undefined
  }
}

export const isValidDate = (value: string | undefined): boolean =>
  !!value && dayjs(value).isValid()

export const formatDatetime = (
  value: string | undefined,
  formatStr = 'MM/DD/YYYY'
): string => (isValidDate(value) ? dayjs(value).format(formatStr) : '')

export const num2Fixed = (value: number): string => value.toFixed(2)

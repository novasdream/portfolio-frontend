import { FC, memo } from 'react'

export interface ICalendlyWidgetScriptProps {}

export const CalendlyWidgetScript: FC<ICalendlyWidgetScriptProps> = memo(() => (
  // <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
  <script
    src="https://assets.calendly.com/assets/external/widget.js"
    type="text/javascript"
    async
  ></script>
))

CalendlyWidgetScript.displayName = 'CalendlyWidgetScript'

export default CalendlyWidgetScript

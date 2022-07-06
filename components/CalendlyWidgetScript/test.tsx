import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { CalendlyWidgetScript } from '.'

describe('<CalendlyWidgetScript />', () => {
  it('should renders correct <CalendlyWidgetScript />', () => {
    const wrapper = shallow(<CalendlyWidgetScript />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

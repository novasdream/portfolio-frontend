import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Radio } from '.'

describe('<Radio />', () => {
  const children = 'Test children'
  const value = 'Test value'

  it('should renders correct <Radio />', () => {
    const wrapper = shallow(<Radio value={value}>{children}</Radio>)

    expect(wrapper.find('.radio-button').prop('data-value')).toContain(value)

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

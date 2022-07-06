import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Col } from './index'

describe('<Col />', () => {
  it('should renders children', () => {
    const text = 'test'

    const wrapper = shallow(<Col>{text}</Col>)

    expect(wrapper.text()).toMatch(text)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

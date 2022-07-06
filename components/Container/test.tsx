import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Container } from './index'

describe('<Container />', () => {
  it('should renders children', () => {
    const text = 'test'

    const wrapper = shallow(<Container>{text}</Container>)

    expect(wrapper.text()).toMatch(text)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

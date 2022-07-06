import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { PlainLink } from '.'

describe('<PlainLink />', () => {
  it('should renders correct <PlainLink />', () => {
    const wrapper = shallow(<PlainLink href="/test-link" />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

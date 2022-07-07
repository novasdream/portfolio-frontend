import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { SocialLinks } from '.'

describe('<SocialLinks />', () => {
  it('should renders correct <SocialLinks />', () => {
    const wrapper = shallow(<SocialLinks />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

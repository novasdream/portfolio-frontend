import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { SiteLogo } from '.'

describe('<SiteLogo />', () => {
  it('should renders correct <SiteLogo />', () => {
    const wrapper = shallow(<SiteLogo />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

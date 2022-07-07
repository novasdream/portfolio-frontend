import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { GoogleIcon } from '.'

describe('<GoogleIcon />', () => {
  it('should renders correct <GoogleIcon />', () => {
    const wrapper = shallow(<GoogleIcon />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

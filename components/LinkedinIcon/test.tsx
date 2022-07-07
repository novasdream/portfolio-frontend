import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { LinkedinIcon } from '.'

describe('<LinkedinIcon />', () => {
  it('should renders correct <LinkedinIcon />', () => {
    const wrapper = shallow(<LinkedinIcon />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

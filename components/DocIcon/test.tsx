import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { DocIcon } from '.'

describe('<DocIcon />', () => {
  it('should renders correct <DocIcon />', () => {
    const wrapper = shallow(<DocIcon />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

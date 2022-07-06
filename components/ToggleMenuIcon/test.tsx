import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ToggleMenuIcon } from '.'

describe('<ToggleMenuIcon />', () => {
  it('should renders correct <ToggleMenuIcon />', () => {
    const wrapper = shallow(<ToggleMenuIcon />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { CheckRoundIcon } from '.'

describe('<CheckRoundIcon />', () => {
  it('should renders correct <CheckRoundIcon />', () => {
    const wrapper = shallow(<CheckRoundIcon />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { CheckIcon } from '.'

describe('<CheckIcon />', () => {
  it('should renders correct <CheckIcon />', () => {
    const wrapper = shallow(<CheckIcon />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

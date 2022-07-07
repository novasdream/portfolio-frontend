import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { StackOverflowIcon } from '.'

describe('<StackOverflowIcon />', () => {
  it('should renders correct <StackOverflowIcon />', () => {
    const wrapper = shallow(<StackOverflowIcon />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

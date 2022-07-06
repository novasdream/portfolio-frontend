import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { PopoverButton } from '.'

describe('<PopoverButton />', () => {
  it('should renders correct <PopoverButton />', () => {
    const wrapper = shallow(<PopoverButton />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

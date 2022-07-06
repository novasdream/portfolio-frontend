import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Popover } from '.'

describe('<Popover />', () => {
  const children = 'Test children'

  it('should renders correct <Popover />', () => {
    const wrapper = shallow(<Popover>{children}</Popover>)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

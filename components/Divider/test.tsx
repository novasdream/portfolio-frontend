import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Divider } from '.'

describe('<Divider />', () => {
  it('should renders correct <Divider />', () => {
    const wrapper = shallow(<Divider />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

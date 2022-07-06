import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Input } from '.'

describe('<Input />', () => {
  it('should renders correct <Input />', () => {
    const wrapper = shallow(<Input />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

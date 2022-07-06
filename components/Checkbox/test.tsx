import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Checkbox } from '.'

describe('<Checkbox />', () => {
  it('should renders correct <Checkbox />', () => {
    const wrapper = shallow(<Checkbox />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

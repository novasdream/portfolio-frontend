import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Signature } from '.'

describe('<Signature />', () => {
  it('should renders correct <Signature />', () => {
    const wrapper = shallow(<Signature />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

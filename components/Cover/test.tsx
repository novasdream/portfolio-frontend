import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Cover } from '.'

describe('<Cover />', () => {
  it('should renders correct <Cover />', () => {
    const wrapper = shallow(<Cover src="test.png" />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

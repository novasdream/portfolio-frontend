import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Badge } from '.'

describe('<Badge />', () => {
  it('should renders correct <Badge />', () => {
    const wrapper = shallow(<Badge title="Badge title" />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

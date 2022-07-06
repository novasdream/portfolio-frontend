import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ArrowDownIcon } from '.'

describe('<ArrowDownIcon />', () => {
  it('should renders correct <ArrowDownIcon />', () => {
    const wrapper = shallow(<ArrowDownIcon />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

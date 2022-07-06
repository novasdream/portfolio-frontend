import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ArrowUpIcon } from '.'

describe('<ArrowUpIcon />', () => {
  it('should renders correct <ArrowUpIcon />', () => {
    const wrapper = shallow(<ArrowUpIcon />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

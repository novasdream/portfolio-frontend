import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { MainNavDropdownMenu } from '.'

describe('<MainNavDropdownMenu />', () => {
  it('should renders correct <MainNavDropdownMenu />', () => {
    const wrapper = shallow(<MainNavDropdownMenu />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

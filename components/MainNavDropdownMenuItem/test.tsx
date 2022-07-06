import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { INavItem } from '@/types'

import { MainNavDropdownMenuItem } from '.'

describe('<MainNavDropdownMenuItem />', () => {
  it('should renders correct <MainNavDropdownMenuItem />', () => {
    const item: INavItem = {
      key: 'test-key',
      title: 'test-tilte'
    }

    const wrapper = shallow(<MainNavDropdownMenuItem item={item} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { INavItem } from '@/types'

import { MainNav } from './index'

describe('<MainNav />', () => {
  it('should renders correct hidden <MainNav />', () => {
    const isShown = false
    const setIsShown = jest.fn()
    const activeItem: INavItem = {
      key: 'test-nav-item-key',
      title: 'Test Item'
    }
    const toggleMainNavItem = jest.fn()

    const wrapper = shallow(
      <MainNav
        isShown={isShown}
        setIsShown={setIsShown}
        activeItem={activeItem}
        toggleMainNavItem={toggleMainNavItem}
      />
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

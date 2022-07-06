import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { INavItem } from '@/types'

import { MainNavItem } from './index'

describe('<MainNavItem />', () => {
  it('should render correct html with default props', () => {
    const item: INavItem = {
      key: 'test-key',
      title: 'test-tilte'
    }

    const wrapper = shallow(<MainNavItem item={item} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

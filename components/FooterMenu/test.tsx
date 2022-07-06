import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FooterMenu } from './index'

describe('<FooterMenu />', () => {
  it('should renders correct html', () => {
    const menu = [
      {
        key: 'test-about-key',
        title: 'About',
        url: '/about'
      },
      {
        key: 'test-example-key',
        title: 'Example',
        url: 'https://example.com'
      }
    ]

    const wrapper = shallow(<FooterMenu menu={menu} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

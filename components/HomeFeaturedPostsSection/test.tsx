import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { HomeFeaturedPostsSection } from '.'

describe('<HomeFeaturedPostsSection />', () => {
  it('should renders correct <HomeFeaturedPostsSection />', () => {
    const wrapper = shallow(<HomeFeaturedPostsSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

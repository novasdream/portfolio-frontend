import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { HomeFeaturedProjectsSection } from '.'

describe('<HomeFeaturedProjectsSection />', () => {
  it('should renders correct <HomeFeaturedProjectsSection />', () => {
    const wrapper = shallow(<HomeFeaturedProjectsSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

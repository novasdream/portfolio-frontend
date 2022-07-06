import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { SiteFooter } from './index'

describe('<SiteFooter />', () => {
  it('should renders correct <SiteFooter />', async () => {
    const wrapper = shallow(<SiteFooter />)

    await new Promise((resolve) => setTimeout(resolve, 0))

    wrapper.update()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

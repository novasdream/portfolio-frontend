import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { SiteHead } from './index'

describe('<SiteHead />', () => {
  it('should renders correct <SiteHead />', async () => {
    const wrapper = shallow(<SiteHead />)

    await new Promise((resolve) => setTimeout(resolve, 0))

    wrapper.update()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { SiteLayout } from '.'

describe('<SiteLayout />', () => {
  it('should renders correct <SiteLayout />', () => {
    const children = 'Test children'

    const wrapper = shallow(<SiteLayout>{children}</SiteLayout>)

    expect(wrapper.contains(children)).toBeTruthy()

    expect(wrapper.find('SiteHeader')).toHaveLength(1)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

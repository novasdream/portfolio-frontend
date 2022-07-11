import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { PageSubtitle } from '.'

describe('<PageSubtitle />', () => {
  it('should renders correct <PageSubtitle />', () => {
    const wrapper = shallow(<PageSubtitle title="Page Subtitle" />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

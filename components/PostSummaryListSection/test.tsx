import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { PostSummaryListSection } from '.'

describe('<PostSummaryListSection />', () => {
  it('should renders correct <PostSummaryListSection />', () => {
    const wrapper = shallow(<PostSummaryListSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

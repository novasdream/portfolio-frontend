import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ProjectSummaryListSection } from '.'

describe('<ProjectSummaryListSection />', () => {
  it('should renders correct <ProjectSummaryListSection />', () => {
    const wrapper = shallow(<ProjectSummaryListSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

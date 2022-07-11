import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { SectionTitle } from '.'

describe('<SectionTitle />', () => {
  it('should renders correct <SectionTitle />', () => {
    const wrapper = shallow(<SectionTitle title="Section Title" />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

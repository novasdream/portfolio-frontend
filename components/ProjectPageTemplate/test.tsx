import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ProjectPageTemplate } from '.'

describe('<ProjectPageTemplate />', () => {
  it('should renders correct <ProjectPageTemplate />', () => {
    const wrapper = shallow(<ProjectPageTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

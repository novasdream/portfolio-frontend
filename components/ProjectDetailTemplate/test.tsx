import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ProjectDetailTemplate } from '.'

describe('<ProjectDetailTemplate />', () => {
  it('should renders correct <ProjectDetailTemplate />', () => {
    const wrapper = shallow(<ProjectDetailTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

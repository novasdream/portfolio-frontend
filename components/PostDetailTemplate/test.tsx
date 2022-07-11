import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { PostDetailTemplate } from '.'

describe('<PostDetailTemplate />', () => {
  it('should renders correct <PostDetailTemplate />', () => {
    const wrapper = shallow(<PostDetailTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

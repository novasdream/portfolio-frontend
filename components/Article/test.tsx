import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Article } from '.'

describe('<Article />', () => {
  it('should renders correct <Article />', () => {
    const wrapper = shallow(<Article />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

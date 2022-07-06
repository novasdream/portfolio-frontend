import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { HomePageTemplate } from '.'

describe('<HomePageTemplate />', () => {
  it('should renders correct <HomePageTemplate />', () => {
    const wrapper = shallow(<HomePageTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

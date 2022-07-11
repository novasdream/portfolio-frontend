import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { PageTitle } from '.'

describe('<PageTitle />', () => {
  it('should renders correct <PageTitle />', () => {
    const wrapper = shallow(<PageTitle title="Page Title" />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

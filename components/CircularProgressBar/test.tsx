import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { CircularProgressBar } from '.'

describe('<CircularProgressBar />', () => {
  it('should renders correct <CircularProgressBar />', () => {
    const wrapper = shallow(<CircularProgressBar progress={0} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

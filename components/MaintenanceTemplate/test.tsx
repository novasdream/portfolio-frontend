import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { MaintenanceTemplate } from '.'

describe('<MaintenanceTemplate />', () => {
  it('should renders correct <MaintenanceTemplate />', () => {
    const wrapper = shallow(<MaintenanceTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

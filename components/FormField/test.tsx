import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FormField } from '.'

describe('<FormField />', () => {
  const name = 'test-name'

  it('should renders correct <FormField />', () => {
    const wrapper = shallow(<FormField name={name} />)

    expect(wrapper.find('Field').prop('name')).toMatch(name)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

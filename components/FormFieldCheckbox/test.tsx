import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FormFieldCheckbox } from '.'

describe('<FormFieldCheckbox />', () => {
  const name = 'test-name'

  it('should renders correct <FormFieldCheckbox />', () => {
    const wrapper = shallow(<FormFieldCheckbox name={name} />)

    expect(wrapper.find('Field').prop('name')).toMatch(name)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

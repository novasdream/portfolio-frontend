import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FormFieldTextArea } from '.'

describe('<FormFieldTextArea />', () => {
  it('should renders correct <FormFieldTextArea />', () => {
    const wrapper = shallow(<FormFieldTextArea name="test" />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Radio } from '@/components'

import { FormFieldRadioGroup } from '.'

describe('<FormFieldRadioGroup />', () => {
  const name = 'test-name'
  const radio1 = <Radio value={1}>Test Radio1</Radio>
  const radio2 = <Radio value={2}>Test Radio2</Radio>

  it('should renders correct <FormFieldRadioGroup />', () => {
    const wrapper = shallow(
      <FormFieldRadioGroup name={name}>
        {radio1}
        {radio2}
      </FormFieldRadioGroup>
    )

    expect(wrapper.find('Field').prop('name')).toMatch(name)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

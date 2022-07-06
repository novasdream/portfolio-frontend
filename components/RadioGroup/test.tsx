import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Radio } from '@/components'

import { RadioGroup } from '.'

describe('<RadioGroup />', () => {
  const radio1 = <Radio value={1}>Test Radio1</Radio>
  const radio2 = <Radio value={2}>Test Radio2</Radio>

  it('should renders correct <RadioGroup />', () => {
    const wrapper = shallow(
      <RadioGroup>
        {radio1}
        {radio2}
      </RadioGroup>
    )

    expect(wrapper.contains(radio1)).toBeTruthy()
    expect(wrapper.contains(radio2)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

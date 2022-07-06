import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FormFieldError } from '.'

describe('<FormFieldError />', () => {
  const name = 'test'

  it('should renders correct <FormFieldError />', () => {
    const wrapper = shallow(<FormFieldError name={name} />)

    expect(wrapper.prop('name')).toMatch(name)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should className form className prop', () => {
    const className = 'test-classname'

    const wrapper = shallow(
      <FormFieldError name={name} className={className} />
    )

    expect(wrapper.prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { CloseButton } from './index'

describe('<CloseButton />', () => {
  it('should renders correct <CloseButton />', () => {
    const onClick = jest.fn()

    const wrapper = shallow(<CloseButton onClick={onClick} />)

    wrapper.find('button').simulate('click')

    expect(onClick).toHaveBeenCalledTimes(1)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has className from prop', () => {
    const className = 'mb-2'
    const onClick = jest.fn()

    const wrapper = shallow(
      <CloseButton onClick={onClick} className={className} />
    )

    expect(wrapper.prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

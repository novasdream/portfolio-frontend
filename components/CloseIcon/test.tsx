import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { CloseIcon } from '.'

describe('<CloseIcon />', () => {
  it('should renders correct <CloseIcon />', () => {
    const wrapper = shallow(<CloseIcon />)

    expect(wrapper.find('path').prop('stroke')).toMatch('#1f2837')
    expect(wrapper.find('svg').prop('width')).toEqual(16)
    expect(wrapper.find('svg').prop('height')).toEqual(16)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct width from width prop', () => {
    const width = 20

    const wrapper = shallow(<CloseIcon width={width} />)

    expect(wrapper.find('svg').prop('width')).toEqual(width)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct width from height prop', () => {
    const height = 20

    const wrapper = shallow(<CloseIcon height={height} />)

    expect(wrapper.find('svg').prop('height')).toEqual(height)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct color', () => {
    const colorHex = '#000'

    const wrapper = shallow(<CloseIcon colorHex={colorHex} />)

    expect(wrapper.find('path').prop('stroke')).toMatch(colorHex)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct classname', () => {
    const className = 'test-classname'

    const wrapper = shallow(<CloseIcon className={className} />)

    expect(wrapper.prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

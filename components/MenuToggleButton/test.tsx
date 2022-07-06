import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { MenuToggleButton } from './index'

describe('<MenuToggleButton />', () => {
  it('should render correct html with default props', () => {
    const onButtonClick = jest.fn()

    const wrapper = shallow(<MenuToggleButton onButtonClick={onButtonClick} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

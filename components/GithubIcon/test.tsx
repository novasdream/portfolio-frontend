import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { GithubIcon } from '.'

describe('<GithubIcon />', () => {
  it('should renders correct <GithubIcon />', () => {
    const wrapper = shallow(<GithubIcon />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

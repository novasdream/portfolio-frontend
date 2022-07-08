import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { DownloadIcon } from '.'

describe('<DownloadIcon />', () => {
  it('should renders correct <DownloadIcon />', () => {
    const wrapper = shallow(<DownloadIcon />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { PostPageTemplate } from '.'

describe('<PostPageTemplate />', () => {
  it('should renders correct <PostPageTemplate />', () => {
    const wrapper = shallow(<PostPageTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

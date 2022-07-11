import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { IPost } from '@/types'

import { PostSummary } from '.'

describe('<PostSummary />', () => {
  it('should renders correct <PostSummary />', () => {
    const post: IPost = {
      id: '1',
      title: 'An Introduction to Terraform',
      description:
        'Learn the basics of Terraform in this step-by-step tutorial of how to deploy a cluster of web servers and a load balancer on AWS',
      date: '7/8/2020',
      slug: 'an-introduction-to-terraform'
    }

    const wrapper = shallow(<PostSummary post={post} pathPrefix="/post" />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { IProject } from '@/types'

import { ProjectSummary } from '.'

describe('<ProjectSummary />', () => {
  it('should renders correct <ProjectSummary />', () => {
    const project: IProject = {
      id: '1',
      title: 'Project title',
      description: 'Project description',
      slug: 'project-title'
    }

    const wrapper = shallow(
      <ProjectSummary project={project} pathPrefix="/project" />
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

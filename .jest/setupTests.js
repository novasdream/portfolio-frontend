import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme from 'enzyme'
import React from 'react'

global.React = React

jest.mock('react-markdown', () => (props) => {
  return props.children
})

jest.mock('next/dist/client/router', () => ({
  __esModule: true,
  useRouter: () => ({
    query: {},
    pathname: '/',
    asPath: '/',
    events: {
      emit: jest.fn(),
      on: jest.fn(),
      off: jest.fn()
    },
    push: jest.fn(() => Promise.resolve(true)),
    prefetch: jest.fn(() => Promise.resolve(true)),
    replace: jest.fn(() => Promise.resolve(true))
  })
}))

// Configure Enzyme with React 17 adapter
Enzyme.configure({ adapter: new Adapter() })

// silence all console.errors in tests
console.error = jest.fn()

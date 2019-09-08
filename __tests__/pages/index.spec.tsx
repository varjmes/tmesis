import React from 'react'
import { shallow } from 'enzyme'

import IndexPage from '../../pages/index'

describe('Index', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<IndexPage />)
    expect(wrapper).toMatchSnapshot()
  })
})

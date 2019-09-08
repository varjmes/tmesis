import React from 'react'
import { shallow } from 'enzyme'

import Header from '../../components/Header/Header'

describe('Header', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })
})

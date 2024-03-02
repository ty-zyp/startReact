import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    return (
      // activeclassname 不写也可以，默认都去找active样式
      <NavLink className='link' activeclassname="active" {...this.props} />
    )
  }
}

import React, { Component } from 'react';
import axios from 'axios';
import sty from './index.module.css';
import B from '../B'
import C from '../C'
import PropTypes from 'prop-types'

export default class A extends Component {
  static propTypes = {
    name: PropTypes.string,
    addr: PropTypes.string.isRequired,
  }
  static defaultProps = {
    name:'书生意气'
  }
  getAjax = () => {
    console.log('发起请求')
    axios.get('/api1/students').then(res => {
      console.log('成功', res.data);
    }, error => {
      console.log('失败', error);
    })
    axios.get('/api2/cars').then(res => {
      console.log('成功', res.data);
    }, error => {
      console.log('失败', error);
    })
  }
  render () {
    return (
      <div>
        <div className={sty.color}>Hello</div>
        <B />
        <C />
        <button onClick={this.getAjax }>按钮</button>
      </div>
    )
  }
}
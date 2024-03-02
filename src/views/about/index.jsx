import React, { Component } from 'react'
import Count from '../../components/ReduxCount';
import ReactReduxCount from '../../containers/Count';
import Person from '../../containers/Person'
import store from '../../redux/store'
export default class About extends Component {
  render() {
    return (
      <div>
        About
        <br />
        <h4>redux 的使用</h4>
        {/* redux */}
        <Count></Count>
        <hr />
        <h4>react-redux的使用</h4>
        {/* react-redux */}
        {/* <ReactReduxCount store={store}></ReactReduxCount> */}

        {/* 在此处也可以不用传store，可以放在根组件上 见src/index.js */}
        <ReactReduxCount />

        <hr />
        <br />
        <Person />
      </div>
    )
  }
}

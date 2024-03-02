import React, { Component } from 'react';
import Pubsub from 'pubsub-js'
import sty from './index.module.css';

export default class B extends Component{

  componentDidMount () {
    // 订阅消息
    this.token = Pubsub.subscribe('toTy', (msg,data) => {
      console.log(1,msg,data)
    })
  }
  componentWillUnmount () {
    Pubsub.unsubscribe(this.token);
  }
  render () {
    return <div>
      <div className={sty.color}>,你好</div>
    </div>
  }
}
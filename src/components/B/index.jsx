import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import sty from './index.module.css';

export default class B extends Component{
  pushMsg = () => {
    PubSub.publish('toTy',{name:'ty',age:20})
  }
  render () {
    return <div>
      <div className={sty.color}>React</div>
      <button onClick={this.pushMsg }>发布消息</button>
    </div>
  }
}
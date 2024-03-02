import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/actions/count'
export default class index extends Component {
  state = {
    count:0
  }
  // redux数据已经更新，但是页面不会更新，此处是为了执行当前页面的render函数
  componentDidMount () {
    store.subscribe(() => {
      this.setState({})
    })
  }
  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncrementAction(value*1))
  }
  decrement=()=>{
    const { value } = this.selectNumber;
    store.dispatch(createDecrementAction(value*1))
  }
  incrementOfOdd = () => {
    const count = store.getState();
    if (count % 2 === 0) {
      return;
    }
    const { value } = this.selectNumber;
    store.dispatch(createIncrementAction(value*1))

  }
  incrementAsync=()=>{
    const { value } = this.selectNumber;
    // setTimeout(() => {
      store.dispatch(createIncrementAsyncAction(value*1,500))
    // },1000)
    
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{ store.getState()}</h1>
        <select ref={c=>this.selectNumber=c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementOfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

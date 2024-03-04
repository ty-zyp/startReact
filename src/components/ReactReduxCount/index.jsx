import React, { Component } from 'react'
export default class index extends Component {
  state = {
    count:0
  }
  increment = () => {
    const { value } = this.selectNumber;
    this.props.increment({ count: value * 1 })
  }
  decrement=()=>{
    const { value } = this.selectNumber;
    this.props.decrement({ count: value * 1 })
  }
  incrementOfOdd = () => {
    const { value } = this.selectNumber;
    const { count } = this.props.count;
    console.log(count)
    if (count % 2 === 0) {
      return;
    }
    this.props.increment({ count: value * 1 })
  }
  incrementAsync=()=>{
    const { value } = this.selectNumber;
    this.props.incrementSync({ count: value * 1}, 500)
    
  }
  render () {
    const { count } = this.props.count;
    return (
      <div>
        <h1>当前求和为：{count},下面的人数添加组件总人数为{this.props.renNum }</h1>
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

import React, { Component } from 'react'
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import { createAddPerson } from '../../redux/actions/person';
class Person extends Component {
  add = () => {
    console.log(this.nameNode.value, this.ageNode.value)
    if (!this.nameNode.value) {
      alert('请输入名字');
      return;
    }
    const personObj = {
      id:nanoid(),
      name: this.nameNode.value,
      age:this.ageNode.value
    }
    this.props.addPerson(personObj);
    this.nameNode.value = ''
    this.ageNode.value = ''
  }
  render () {
    console.log('person',this.props)
    return (
      <div>
        <h2>上方计算组件count值为：{this.props.count }</h2>
        <input ref={c=>this.nameNode=c} type="text" placeholder='名字' />
        <input ref={c=>this.ageNode=c} type="text" placeholder='年龄' />
        <button onClick={this.add}>添加</button>
        <ul>
          {this.props.personArr.map(item => {
            return <li key={item.id}>名字:{item.name}--年龄:{ item.age}</li>
          })}
          
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({ personArr: state.persons,count:state.count.count }),
  {'addPerson':createAddPerson}
)(Person)


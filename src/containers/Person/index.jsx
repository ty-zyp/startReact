import React, { Component } from 'react'
import { nanoid } from 'nanoid';
// import { connect } from 'react-redux';
// import { createAddPerson } from '../../redux/actions/person';
export default class Person extends Component {
  add = () => {
    console.log(this.nameNode.value, this.ageNode.value)
    const personObj = {
      ids:nanoid(),
      name: this.nameNode.value,
      age:this.ageNode.value
    }
    console.log(personObj)
    // this.props.addPerson(personObj);
  }
  render () {
    console.log('person',this.props)
    return (
      <div>
        <input ref={c=>this.nameNode=c} type="text" placeholder='名字' />
        <input ref={c=>this.ageNode=c} type="text" placeholder='年龄' />
        <button onClick={this.add}>添加</button>
        <ul>
          <li>名字1--年龄1</li>
        </ul>
      </div>
    )
  }
}

// export default connect(
//   state => ({ personArr: state.ren }),
//   {'addPerson':createAddPerson}
// )(Person)


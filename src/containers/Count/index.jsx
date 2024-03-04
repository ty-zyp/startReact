// 引入UI组件 也可以不用引入，直接把UI组件写到这里就行，变两个文件为一个；
import CountUI from '../../components/ReactReduxCount';

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux';

import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count'

// mapStateToProps 函数返回的是一个对像
// 返回对像中的key作为传递给UI组件props的key，value就作为传递给UI组件props的value
// mapStateToProps 用于传递状态
function mapStateToProps (state) {
  return {count:state.count,renNum:state.persons.length}
}
// mapDispatchToProps函数返回的是一个对像；
// 对像中的key作为传递给UI组件props的key，value就作为传递给UI组件props的value
// mapDispatchToProps用于传递操作状态的方法
function mapDispatchToProps (dispatch) {
  return {
    'increment': data => dispatch(createIncrementAction(data)),
    'decrement': data => dispatch(createDecrementAction(data)),
    'incrementSync': (data,time) => dispatch(createIncrementAsyncAction(data,time)),
  }
}
// 创建并暴露一个Count组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);

// 简写方式
// export default connect(
//   state => ({ count: state}),

//   // 操作状态的方法，简化一 写成函数
//   // dispatch=>  ({
//   //   'increment': data => dispatch(createIncrementAction(data)),
//   //   'decrement': data => dispatch(createDecrementAction(data)),
//   //   'incrementSync': (data,time) => dispatch(createIncrementAsyncAction(data,time)),
//   // })

//   // 操作状态的方法，简化二 写成一个对像
//   {
//     'increment': createIncrementAction,
//     'decrement': createDecrementAction,
//     'incrementSync': createIncrementAsyncAction,
//   }
// )(CountUI);

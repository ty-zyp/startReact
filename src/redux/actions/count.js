// 专为count组件生成action对象
import { INCREMENT, DECREMENT } from "../constant";
export function createIncrementAction (data) {
  return {type:INCREMENT,data}
}
export function createDecrementAction (data) {
  return {type:DECREMENT,data}
}
// 异步action，就是指action的值为函数，异步action中一般都会调用同步action，异步action不一定要用；
export function createIncrementAsyncAction (data,time) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type:INCREMENT, data })
    }, time)
  }
}
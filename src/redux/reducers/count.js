import { INCREMENT ,DECREMENT } from "../constant"

const initState = {count:0}
export default function countReducer (preState = initState, action) {
  const { type, data } = action;
  console.log(type,data,preState)
  switch (type) {
    case INCREMENT:
      // return preState + data;
      preState = JSON.parse(JSON.stringify(preState));
      preState.count = preState.count + data.count;
      return preState
    case DECREMENT:
      preState = JSON.parse(JSON.stringify(preState));
      preState.count = preState.count - data.count;
      return preState;
      // return preState - data;
    default:
      return preState;
  }
}
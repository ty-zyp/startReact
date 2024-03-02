import { INCREMENT ,DECREMENT } from "../constant"

export default function countReducer (preState = 0, action) {
  const { type, data } = action;
  console.log(type,data,preState)
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}
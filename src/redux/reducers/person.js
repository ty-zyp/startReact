import { ADD_PERSON } from "../constant";
// 初始化人列表
const initState = [{id:'001',name:'tom',age:18}]
export default function personReducer (preState=initState, action) {
  const { type, data } = action;
  console.log('==1==',type)
  console.log('==2==',data)
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState];
    default:
      return preState;
  }
}
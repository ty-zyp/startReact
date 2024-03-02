import { legacy_createStore as createStore, applyMiddleware,combineReducers} from 'redux';
// import { createStore, applyMiddleware,combineReducers} from 'redux';
import countReducer from './reducers/count';
import personReducer from './reducers/person'
// 引入redux-thunk,用于支持异步action
import { thunk } from 'redux-thunk';
// const allReducer = combineReducers({
//   // he:countReducer,
//   ren:personReducer
// })
export default createStore(countReducer,applyMiddleware(thunk));

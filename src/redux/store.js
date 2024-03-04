import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import allReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension'

// 引入redux-thunk,用于支持异步action
import { thunk } from 'redux-thunk';

export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)));

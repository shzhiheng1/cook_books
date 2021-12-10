import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer'

// Redux store 仅支持同步数据流。使用 thunk 等中间件可以帮助在 Redux 应用中实现异步性。
const store=createStore(reducer,applyMiddleware(thunk));

export default store;

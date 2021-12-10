import {combineReducers} from 'redux';
import {reducer as cookbookReducer} from '../home/cookbook/index'
/***
 * combineReducers:合并后各个子 reducer到同一个redux，并把它们的结果合并成一个 state 对象。
 */ 
const reducer=combineReducers({
    cookbookReducer
})
export default reducer
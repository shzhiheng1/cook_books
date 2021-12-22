import {combineReducers} from 'redux';
import {reducer as cookbookReducer} from '../home/cookbook/index'
import {reducer as moreReducer} from '../home/more'
import {reducer as categoryReducer} from '../home/category'
/***
 * combineReducers:合并后各个子 reducer到同一个redux，并把它们的结果合并成一个 state 对象。
 */ 
const reducer=combineReducers({
    cookbookReducer,
    moreReducer,
    categoryReducer
})
export default reducer
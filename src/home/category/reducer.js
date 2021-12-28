import {fromJS} from 'immutable'
import {ACTIVE_key,CATEGORY_TYPE,CHECK_CATE} from './actionTypes'

const defaultState=fromJS({
    categoryInfo:{
        activeKey:'cookbook',//tabBar选中的tab
        categoryType:'category',//分类的类型
        checkCate:''//分类类型下的选择项
    }
})

const reducer=(state=defaultState,action)=>{
    switch (action.type) {
        case ACTIVE_key:
            return state.setIn(['categoryInfo','activeKey'],action.activeKey)
            // return {
            //     categoryInfo:{
            //         ...state.categoryInfo,
            //        activeKey:action.activeKey
            //     } 
            // }
        case CATEGORY_TYPE:
            return state.setIn(['categoryInfo','categoryType'],action.categoryType)
                // return {
                //     categoryInfo:{
                //         ...state.categoryInfo,
                //        categoryType:action.categoryType
                //     } 
                // }
        case CHECK_CATE:
            return state.setIn(['categoryInfo','checkCate'],action.checkCate)

            // return {
            //     categoryInfo:{
            //         ...state.categoryInfo,
            //         checkCate:action.checkCate
            //     }
            // }
        default:
            return state
    }
}

export default reducer;

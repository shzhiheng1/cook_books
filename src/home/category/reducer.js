import {ACTIVE_key,CATEGORY_TYPE,CHECK_CATE} from './actionTypes'

const defaultState={
    categoryInfo:{
        activeKey:'cookbook',//tabBar选中的tab
        categoryType:'category',//分类的类型
        checkCate:''//分类类型下的选择项
    }
}

const reducer=(state=defaultState,action)=>{
    switch (action.type) {
        case ACTIVE_key:
            return {
                categoryInfo:{
                    ...state.categoryInfo,
                   activeKey:action.activeKey
                } 
            }
        case CATEGORY_TYPE:
                return {
                    categoryInfo:{
                        ...state.categoryInfo,
                       categoryType:action.categoryType
                    } 
                }
        case CHECK_CATE:
            return {
                categoryInfo:{
                    ...state.categoryInfo,
                    checkCate:action.checkCate
                }
            }
        default:
            return state
    }
}

export default reducer;

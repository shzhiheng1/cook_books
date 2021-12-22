import {ACTIVE_key} from './actionTypes'

const defaultState={
    categoryInfo:{
        activeKey:'cookbook'
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
    
        default:
            return state
    }
}

export default reducer;

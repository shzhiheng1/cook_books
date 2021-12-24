import { ANIMATED_Type } from "./actionTypes";

const defaultState={
    animatedType:'slide-left'
}

const reducer=(state=defaultState,action)=>{
    switch (action.type) {
        case ANIMATED_Type:
            return {
                animatedType:action.animatedType
            }
        default:
            return state
    }
}
export default reducer

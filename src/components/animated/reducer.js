import { Map } from "immutable";
import { ANIMATED_Type } from "./actionTypes";

const defaultState=Map({
    animatedType:'slide-left'
})

const reducer=(state=defaultState,action)=>{
    switch (action.type) {
        case ANIMATED_Type:
            return state.set('animatedType',action.animatedType)
            // return {
            //     animatedType:action.animatedType
            // }
        default:
            return state
    }
}
export default reducer

import { LOADDATA } from "./actionTypes";
import { Map,List } from "immutable";

const defaultState=Map({
    list:List([])
})
const reducer=(state=defaultState,action)=>{
   switch (action.type) {
       case LOADDATA:
           return state.set('list',List(action.list))
        //    return {
        //        list:action.list
        //    }
       default:
           return state;
   }
}
export default reducer;
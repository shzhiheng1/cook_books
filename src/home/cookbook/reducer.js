import { LOADDATA } from "./actionTypes";

const defaultState={
    list:[]
}
const reducer=(state=defaultState,action)=>{
   switch (action.type) {
       case LOADDATA:
           return {
               list:state.list
           }
       default:
           return state;
   }
}
export default reducer;
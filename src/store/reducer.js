
const defaultState={
    list:[]
}
const reducer=(state=defaultState,action)=>{
   switch (action.type) {
       case 'loadData':
           return {
               list:state.list
           }
       default:
           return state;
   }
}
export default reducer;
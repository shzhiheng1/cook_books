import storage from 'storejs';
import {Map} from 'immutable'

import {MORE_CHECKED} from './actionType'

const defaultState=Map({
    checked:storage.get('checked')===undefined?true:storage.get('checked')
    // checked:localStorage.getItem('checked')===null?true:JSON.parse(localStorage.getItem('checked'))
});

const reducer=(state=defaultState,action)=>{
    switch (action.type) {
        case MORE_CHECKED:
            return state.set('checked',action.checked)
            // return{
            //    checked:action.checked 
            // }    
        default:
            return state
    }
}

export default reducer


import storage from 'storejs';

import {MORE_CHECKED} from './actionType'

const defaultState={
    checked:storage.get('checked')===undefined?true:storage.get('checked')
    // checked:localStorage.getItem('checked')===null?true:JSON.parse(localStorage.getItem('checked'))
};

const reducer=(state=defaultState,action)=>{
    switch (action.type) {
        case MORE_CHECKED:
            return{
               checked:action.checked 
            }    
        default:
            return state
    }
}

export default reducer


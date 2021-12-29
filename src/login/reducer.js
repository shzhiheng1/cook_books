import { TOKEN } from "./actionTypes";
import { getCookie } from '@/utils/cookie';

const defaultState={
    token:getCookie('token')
}

const reducer=(state=defaultState,action)=>{
    switch (action.type) {
        case TOKEN:
            return {
                token:action.token
            }
        default:
            return state
    }
}

export {
    reducer
}
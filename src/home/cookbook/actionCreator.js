import { LOADDATA} from './actionTypes'

import { request } from '../../utils/request';

const loadDataSync=list=>{
    return {
        type:LOADDATA,
        list
    }
}

const loadDataAsync=()=>{
    return async (dispatch)=>{
       let result= await request('/hotcate');
       dispatch(loadDataSync(result.data))
    }
}

export {
    loadDataSync,
    loadDataAsync
}
import {ACTIVE_key} from './actionTypes'
const activeKeySync=(activeKey)=>{
   return {
       type:ACTIVE_key,
       activeKey
   }
}

export {
    activeKeySync
}
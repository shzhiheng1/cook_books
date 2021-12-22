import {ACTIVE_key,CATEGORY_TYPE,CHECK_CATE} from './actionTypes'

const activeKeySync=(activeKey)=>{
   return {
       type:ACTIVE_key,
       activeKey
   }
}

const categoryTypeSync=(categoryType)=>{
    return {
        type:CATEGORY_TYPE,
        categoryType
    }
}

const checkCateSync=(checkCate)=>{
    return {
        type:CHECK_CATE,
        checkCate
    }
}

export {
    activeKeySync,
    categoryTypeSync,
    checkCateSync
}
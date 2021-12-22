import React, { Component } from 'react'
import {connect} from 'react-redux'
import {categoryTypeSync,checkCateSync} from '../actionCreatoer'
import {CategoryWrap} from './StyledCategory'
import Search from '@/components/search/Search'
import Menu from './Menu'

@connect(
    state=>({
        categoryType:state.categoryReducer.categoryInfo.categoryType
    }),
    dispatch=>({
        handleClick(categoryType){
            dispatch(categoryTypeSync(categoryType))
            dispatch(checkCateSync(categoryType==='category'?'主食':'粮食'))
        },
    })
)
class Category extends Component {
    render() {
        const {categoryType}=this.props
        return (
            <CategoryWrap>
                <nav>
                    <ul>
                        <li onClick={()=>this.props.handleClick('category')} className={categoryType==='category'?'active':''}>分类</li>
                        <li onClick={()=>this.props.handleClick('ingredients')} className={categoryType==='ingredients'?'active':''}>食材</li>
                        <li className={categoryType==='category'?'slide':'slide right'}></li>
                    </ul>
                </nav>
                <Search 
                   outBg="#fff"
                   interBg="#eee"
                   hasBorder={false}
                   radius="0.2"
                />
                <Menu 
                // type={categoryType}
                ></Menu>

            </CategoryWrap>
        )
    }
}
export default Category


import React, { Component } from 'react'
import {CategoryWrap} from './StyledCategory'
import Search from '@/components/search/Search'

export default class Category extends Component {
    constructor(props){
        super(props)
        this.state={
            tabIndex:0
        }
    }
    handleClick=(index)=>{
        return ()=>{
            this.setState({
                tabIndex:index
            })
        }
    }
    render() {
        return (
            <CategoryWrap>
                <nav>
                    <ul>
                        <li onClick={this.handleClick(0)} className={this.state.tabIndex===0?'active':''}>分类</li>
                        <li onClick={this.handleClick(1)} className={this.state.tabIndex===1?'active':''}>食材</li>
                        <li className={this.state.tabIndex===0?'slide':'slide right'}></li>
                    </ul>
                </nav>
                <Search 
                   outBg="#fff"
                   interBg="#eee"
                   hasBorder={false}
                />
            </CategoryWrap>
        )
    }
}

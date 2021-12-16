import React, { Component } from 'react'
import {
   NavBar,
   Switch
}from 'antd-mobile'
import { connect } from 'react-redux';
import storage from 'storejs';//处理localStoreage转字符串的问题

import {syncGetChecked} from './actionCreator'

import './more.less';

@connect(
    state=>({
        checked:state.moreReducer.checked
    }),
    dispatch=>({
        handleChange(checked){
            dispatch(syncGetChecked(checked))
            storage.set('checked',checked)
            // localStorage.setItem('checked',checked)
        }
    })
)
class  More extends Component{
   render(){
    return (
        <div className='more-wrap'>
            <NavBar 
              backArrow={false}
              style={{
                background:'#ee742f',
                color:'#fff',
                '--height':'1.4rem'
              }}
            >更多</NavBar>
            <div className='more-wrap-switch'>
                <span>是否开启地图：</span>
                <Switch
                   checked={this.props.checked}
                   onChange={this.props.handleChange}
                   style={{
                    '--checked-color': '#ee742f',
                    '--height': '1rem',
                    '--width': '3rem',
                   }}
                />
            </div>
        </div>
    )
   }
    
}
export default More
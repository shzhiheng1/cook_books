import React, { Component } from 'react'
import {
   NavBar,
   Switch,
   Button,
   Divider
}from 'antd-mobile'
import { connect } from 'react-redux';
import storage from 'storejs';//处理localStoreage转字符串的问题

import {syncGetChecked} from './actionCreator'

import {setTokenSync} from '@/login'
import { deleteCookie,getCookie } from '@/utils/cookie';
import { withRouter } from 'react-router-dom'


import './more.less';
@withRouter
@connect(
    state=>({
        checked:state.moreReducer.checked
    }),
    dispatch=>({
        handleChange(checked){
            dispatch(syncGetChecked(checked))
            storage.set('checked',checked)
            // localStorage.setItem('checked',checked)
        },
        handleOutLogin(){
            dispatch(setTokenSync(''))
            deleteCookie('token')
        }
    })
)
class  More extends Component {
    handleBtn=()=>{
        const history=this.props.history
        const _name=getCookie('name') || ''
        history.push({pathname:'/mine',state:{title:'我的信息',username:_name}})
    }
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
            <Divider  style={{
                color: '#ee742f',
                borderColor: '#ee742f',
            }}/>
            <div className='more-wrap-switch'>
                <span>是否退出登录：</span>
                <Switch
                   checked={false}
                   onChange={this.props.handleOutLogin}
                   style={{
                    '--checked-color': '#ee742f',
                    '--height': '1rem',
                    '--width': '3rem',
                   }}
                />
            </div>
            <Divider  style={{
                color: '#ee742f',
                borderColor: '#ee742f',
            }}/>
            <div className='more-wrap-switch'>
                <span>完善我的信息：</span>
                <Button  type='text' color='primary' fill='none' onClick={this.handleBtn}>
                  去完善  
                </Button>
            </div>
        </div>
    )
   }
    
}
export default More
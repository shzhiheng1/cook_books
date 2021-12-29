import React,{useState} from 'react'
import { useHistory,useLocation } from 'react-router-dom';
import {Form,Button,Input,Checkbox,Toast} from 'antd-mobile'
import { useDispatch } from 'react-redux';
import { setTokenSync } from './index';
import SvgIcon from '@/components/svgicon/Svgicon';
import { request } from '@/utils/request';
import { setCookie,deleteCookie } from '@/utils/cookie';

import { LoginWrap } from './StyleLogin'


export default function Login() {
    let dispatch=useDispatch();
    let location=useLocation();
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [agree,setAgree]=useState(true)
    // 自定义rules
    const validatorPassword = ( rule,value,cd) => {
        // return new Promise((resolve,reject)=>{
        //     if (value.length>5&&value.length<17) {
        //         resolve()
        //     }else{
        //         reject(new Error('密码6~16位!'))
        //     }
        // })
        if (value.length>5&&value.length<17) {
            return Promise.resolve()
        }else{
            return Promise.reject(new Error('密码6~16位!'))
        }
      }
    const history=useHistory();

    const onFinish=(values)=>{
        request('/api/login').then(res=>{
           const whiteList=res.data.whiteList
           const loginIndex=whiteList.findIndex(item=>item.name===values.name&&item.password===values.password)
           if(loginIndex>-1){
                setCookie('token','true',1)
                dispatch(setTokenSync('true'))
                Toast.show({
                    icon: 'success',
                    content: '登录成功!',
                })
                if(location.state!==undefined){
                    history.push(location.state.from.pathname)
                }else{
                    history.push('/home')
                }
           }else{
                deleteCookie('token')
                dispatch(setTokenSync(''))
               Toast.show({
                   icon:'fail',
                   content:'用户名或密码错误!',
                   maskClickable: false
               })
           }
        }).catch(err=>{
            console.error(err)
        })
    }
    return (
        <LoginWrap>
            <header>
                <p>登录</p>
                <SvgIcon fill="#ee742f"  iconID="user"/>
            </header>
            <Form
                onFinish={onFinish}
                layout='horizontal'        
                footer={
                    <Button block type='submit' color='primary'>
                    提交
                    </Button>
                }
            >
                <Form.Item
                    style={{
                        '--prefix-width': '2rem',
                    }}
                    label='用户名'
                    name='name'
                    rules={[{ required: true, message: '用户名不能为空' }]}
                >
                    <Input  
                        placeholder='请输入用户名' 
                        clearable value={name}
                        onChange={val => {
                            setName(val)
                        }}
                    />
                </Form.Item>
                <Form.Item
                    style={{
                        '--prefix-width': '2rem',
                    }}
                    label="密码"
                    name='password'
                    rules={[{ required: true, message: '用密码不能为空' },{ validator: (rule,val,cd)=>validatorPassword(rule,val,cd) }]}
                >
                    <Input 
                        placeholder='请输入密码' 
                        clearable type='password' 
                        maxLength={16} 
                        minLength={6}
                        value={password}
                        onChange={val => {
                            setPassword(val)
                        }}
                    />
                </Form.Item>
                <Form.Item name='agree'>
                   <Checkbox block value={agree} onChange={val=>setAgree(val) }> <span>我已阅读各项条款</span></Checkbox>
                </Form.Item>
            </Form>
        </LoginWrap>
    )
}

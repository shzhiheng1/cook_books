import React, { Component } from 'react'
import NavBack from '@/components/navback/NavBack'
import Address from '@/components/address/Address.jsx'
import {
    Form,
    Input,
    Button,
    Toast
} from 'antd-mobile'


export default class Mine extends Component {
    state={
        username:this.props.location.state.username||'',
        phone:'',
        email:'',
        address:'',
        avatar:''
    }
    onFinish=(values)=>{
       console.log(values)
       this.setState({
            phone:values.phone||'',
            email:values.email||'',
       },()=>{
        Toast.show({
            icon:'success',
            content:'提交成功！',
            duration:3000,
            afterClose:()=>{
                this.props.history.goBack()
            }
        })
       })
    }
    // 接收子组件数据
    deliveFn=(value)=>{
       this.setState({
           address:value
       })
    }
    // 文件上传
    upLoader=(e)=>{
        console.log(e)
        e.preventDefault();
        let file = e.target.files[0];
        const formdata = new FormData();
        formdata.append('file', file);
                
        for (var value of formdata.values()) {
            console.log(value);
        }
            // const url = 'http://127.0.0.1:8080/file/upload';
            // fetch(url, {
            //     method: 'POST',
            //     body: formdata,
            //     headers: {
            //         "Content-Type": "multipart/form-data"
            //     }
            // }).then(response => return response.json();)
            // .catch(error => console.log(error));
    }
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        const {username} =this.state
        return (
            <div>
                <NavBack />
                <>
                    <Form layout='horizontal' mode='card'
                      onFinish={this.onFinish}
                      footer={
                        <Button block type='submit' color='primary' size='large'>
                          提交
                        </Button>
                      }
                    >
                        <Form.Header>完善用户信息</Form.Header>
                        <Form.Item label='用户名'>
                           <Input value={username} disabled/>
                        </Form.Item>
                        <Form.Item 
                           label='手机号'
                           name='phone'
                           rules={[
                            {required:true}
                           ]}
                        >
                           <Input placeholder='请输入' />
                        </Form.Item>
                        <Form.Item 
                            label='邮箱地址'
                            name='email'
                            rules={[
                                { required: true },
                                { type: 'string', min: 6 },
                                { type: 'email', warningOnly: true },
                            ]}
                        >
                           <Input placeholder='请输入' />
                        </Form.Item>
                        <Form.Item label='所在城市'>
                           <Address sendFn={this.deliveFn} />
                        </Form.Item>
                        <Form.Item 
                           label='头像'
                        >
                           <input type='file' onChange={this.upLoader}/>
                        </Form.Item>
                    </Form>
                </>
            </div>
        )
    }
}
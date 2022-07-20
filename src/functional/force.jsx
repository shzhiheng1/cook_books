import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import NavBack from '@/components/navback/NavBack'
import Loading from './components/Loading'
import {
    Button,
    Card,
    Toast
} from 'antd-mobile'
import './force.less'


export default class Force extends Component {
    constructor(props){
        super(props)
        this.state={
            age:11,
            loading:false
        }
        this.name='小王'
        this.usernameRef = React.createRef()
    }
    handlePortal=()=>{
        this.setState({
          loading:true
        },()=>{
          setTimeout(() => {
            this.setState({
              loading:false
            })
          }, 10000);
        })
    }
    handleForce=()=>{
       this.name='小白'
       this.forceUpdate()
    }

    handleClose=(loading)=>{
      this.setState({
        loading
      })
    }
    handleRef=()=>{
      const val= this.usernameRef.current.value
      Toast.show(val)
    }
    componentDidMount(){
      const el=document.getElementById('portal')
      console.log(el);
    }
  render() {
    return (
      <div className='wrap'>
        <NavBack />
        <Card title='force强制更新触发render' className='card'>
            <div className='card_content'>state,props外的其他依赖：{this.name}</div>
            <div className='card_footer'>
              <Button onClick={this.handleForce} type='button' color='primary' size='small'>强制更新</Button>
            </div> 
        </Card>        
        <Card title='dangerouslySetInnerHTML属性设置innerHtml' className='card'> 
           <div className='card_content'  dangerouslySetInnerHTML={{__html:`<span>React中使用innerHtml:${this.state.age}</span>`}}></div>
        </Card>
        <Card title='createPortal插入模板' className='card'> 
           <div className='card_content'>{createPortal(<Loading  show={this.state.loading} handleClose={this.handleClose}/>,document.getElementById('portal'))}</div>
           <div className='card_footer'>
              <Button onClick={this.handlePortal} type='button' color='primary' size='small'>loading</Button>
            </div> 
        </Card>
        <Card title='React.createRef' className='card'> 
           <div className='card_content'>
              <input ref={this.usernameRef} type='text' style={{height:'30px',width:'100%'}} />
           </div>
           <div className='card_footer'>
              <Button onClick={this.handleRef} type='button' color='primary' size='small'>通过ref所有获取</Button>
            </div> 
        </Card>
      </div>
    )
  }
}

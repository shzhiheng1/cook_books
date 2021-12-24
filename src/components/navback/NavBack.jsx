import { NavBar } from 'antd-mobile'
import {connect} from 'react-redux'
import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {chengeAnimatedTypeSync} from '@/components/animated/actionCreator.js'



@withRouter
@connect(
  state=>({

  }),
  (dispatch)=>({
    goBack(animatedType){
        dispatch(chengeAnimatedTypeSync(animatedType))
    }
})
)
class NavBack extends Component {
  state={
    title:''
  }
  goBack=()=>{
    this.props.goBack('slide-right')
    this.props.history.goBack()
    setTimeout(() => {
        this.props.goBack('slide-left')
    }, 300);
  }
  componentDidMount(){
    // url取参数
    if(this.props.location.state){
        this.setState({
            title:this.props.location.state.title
        })
    }
  }
  render() {
    return (
      <div>
         <NavBar 
                 onBack={this.goBack}
                 style={{
                    background:'#ee742f',
                    color:'#fff',
                    '--height':'1.4rem'
                  }}
                >
                   {this.state.title}
            </NavBar>
      </div>
    )
  }
}
export default NavBack

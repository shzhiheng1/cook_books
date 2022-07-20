import React, { Component } from 'react'
import './loading.less'

export default class Loading extends Component {
  constructor(props){
     super(props)
     this.state={
       show:false
     }
  }
  // 当props也进行修改state的才去使用，这里为了测试。
  static getDerivedStateFromProps(props,state){
        return {
          show:props.show
        }
  }
  // 控制是否更新(默认return true)
  // shouldComponentUpdate(nextProps,nextState){
  //   if(nextProps.show===this.state.show){
  //     return false
  //   }else{
  //     return true
  //   }
  // }
  
  
  handleClose=()=>{
    this.props.handleClose(false)
  }
  render() {
    return (
      <div className='loading' style={{display:this.state.show===true?'block':'none'}} onClick={this.handleClose}>
        <div className='loading_content'>
           加载中。。。
        </div>
      </div>
    )
  }
}

/************类组件写法**************/

// import React, { Component } from 'react'
// import Cookbookui from '../ui/Cookbookui'
// import { connect } from 'react-redux'
// import { loadDataAsync } from '../actionCreator'

// /**
//  * @connect(mapStateToProps, mapDispatchToProps) AppUI修饰等同于高阶组件
//  * export default connect(mapStateToProps, mapDispatchToProps)(AppUI);
//  * 1.mapStateToProps：更新props,返回一个对象,key为UI界面对应的名称，value为state处理的结果。
//  * 2.mapDispatchToProps：更新action。触发action更新reducer，进而更新state，引起UI数据的变化。
//  * 
//  */
// @connect(
//   (state)=>{
//       return {
//         list:state.cookbookReducer.list
//       }
//   },
//   (dispatch)=>({
//        loadData(){
//          dispatch(loadDataAsync())
//        }
//   })
// )
// class Cookbook extends Component {
//     render() {
//         return (
//            <>
//              <Cookbookui list={this.props.list}></Cookbookui>
//            </>
//         )
//     }
//     componentDidMount(){
//       this.props.loadData()
//     }
//     componentDidUpdate(){
//       // console.log('更新list===',this.props.list)
//     }
// }
// export default Cookbook





/************函数组件hooks写法**************/

import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
// import { loadDataAsync } from '../actionCreator'
import Cookbookui from '../ui/Cookbookui'


export default function Cookbook() {
  // const {list}=useSelector(state=>state.cookbookReducer)
  const list=useSelector(state=>state.getIn(['cookbookReducer','list']))
  let dispatch=useDispatch();
  useEffect(()=>{
    // dispatch(loadDataAsync())
    dispatch({type: 'LOAD_DATA_LIS'})
  },[dispatch])

  return (
          <>
            <Cookbookui list={list}></Cookbookui>
          </>
  )
}


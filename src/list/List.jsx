import React, { Component } from 'react'
import { NavBar } from 'antd-mobile'
// import { Toast } from 'antd-mobile'
import {connect} from 'react-redux'
import {loadDataAsync} from '@/home/cookbook/actionCreator.js'
import {ContainerList,LiBorder,EllipsisH2} from './styledList'


@connect(
    state=>({
        list:state.cookbookReducer.list
    }),
    (dispatch)=>({
        getListData(){
            dispatch(loadDataAsync())
        }
    })
)
class List extends Component {
    state={
        title:'标题'
    }
    goBack=()=>{
        // Toast.show({
        //     content: '点击了返回区域',
        //     duration: 1000,
        // })
        this.props.history.goBack()
    }
    componentDidMount(){
        // url取参数
        if(this.props.location.state){
            this.setState({
                title:this.props.location.state.title
            })
        }
        // []拉取数据
        if(this.props.list){
            this.props.getListData()
        }
    }
    render() {
        const {list}=this.props
        return (
            <ContainerList>
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
                <div className='order-list'>
                    <ul>
                        {
                           list.length>0&&list.map((item,index)=>(
                                <LiBorder
                                    width={list.length-1===index?'0':'0 0 1px 0'}
                                    color='#ccc'
                                    key={item.id}
                                >
                                    <img src={item.url} alt="logo"  />
                                    <div>
                                        <h1>{item.title}</h1>
                                        <EllipsisH2>{item.name}</EllipsisH2>
                                        <h3>点赞{item.like} 收藏{item.collection}</h3>
                                    </div>
                                </LiBorder>
                            )) 
                        }
                    </ul>
                </div>

            </ContainerList>
        )
    }
}
export default List
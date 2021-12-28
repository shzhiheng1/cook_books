import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadDataAsync} from '@/home/cookbook/actionCreator.js'
import {ContainerList,LiBorder,EllipsisH2} from './styledList'
import NavBack from '../components/navback/NavBack'


@connect(
    state=>({
        // list:state.cookbookReducer.list
        list:state.getIn(['cookbookReducer','list'])
    }),
    (dispatch)=>({
        getListData(){
            dispatch(loadDataAsync())
        }
    })
)
class List extends Component {
    goDetail=(item)=>{
        const history=this.props.history
        return ()=>{
            history.push('/detail',item)
        }
    }
    componentDidMount(){
        // []拉取数据
        if(this.props.list){
            this.props.getListData()
        }
    }
    render() {
        const {list}=this.props
        return (
            <ContainerList>
                <NavBack></NavBack>
                <div className='order-list'>
                    <ul>
                        {
                           list.size>0&&list.map((item,index)=>(
                                <LiBorder
                                    width={list.length-1===index?'0':'0 0 1px 0'}
                                    color='#ccc'
                                    key={item.id}
                                    onClick={this.goDetail(item)}
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
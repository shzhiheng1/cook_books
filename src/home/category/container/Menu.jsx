import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {checkCateSync} from '../actionCreatoer'
import { request } from '../../../utils/request'
// import PropTypes from 'prop-types'
import MenuList from '../ui/MenuList'
@withRouter
@connect(
    state=>({
        // checkCate:state.categoryReducer.categoryInfo.checkCate,
        checkCate:state.getIn(['categoryReducer','categoryInfo','checkCate']),
        // categoryType:state.categoryReducer.categoryInfo.categoryType
        categoryType:state.getIn(['categoryReducer','categoryInfo','categoryType'])
    }),
    dispatch=>({
        changeAside(checkCate){
            dispatch(checkCateSync(checkCate))
        }
    })
)
class Menu extends Component {
    state={
        cate:null
    }
    // constructor(props){
    //     super(props)
    //     this.state={
    //         cate:null,
    //         checkCate:this.props.type==="category"?"主食":"粮食",
    //         type:'category'//多创建的state,用于对比nextProps和preState
    //     }
    // }
    // static propTypes={
    //     type:PropTypes.string
    // }
    /**
     *  getDerivedStateFromProps(nextProps,preState)
     * 使用条件：当父组件和子组件操作同一个state的时候使用。
     * @param {*} nextProps 父组件传递的props
     * @param {*} preState 更改之前state
     * @returns null表示不做任何处理，{}表示要更改的state
     */
    // getDerivedStateFromProps(nextProps,preState)当父组件和子组件同
    // static getDerivedStateFromProps(nextProps,preState){
    //     if(nextProps.type===preState.type){
    //         console.log('-----------')
    //         return null
    //     }else{
    //         console.log('+++++++++++++++++')
    //         return {
    //             checkCate:nextProps.type==="category"?"主食":"粮食",
    //             type:nextProps.type
    //         }
    //     }
    // }
    componentDidMount(){
        if(!this.props.checkCate){
            const checkCate=this.props.categoryType==="category"?"主食":"粮食"
            this.props.changeAside(checkCate)
        }
        request('/api/category').then(res=>{
            console.log(res)
            this.setState({
                cate:res.data
            })
        }).catch(err=>{
            console.error(err);
        })

    }
    onChangeAside=(item)=>{
        return ()=>{
            this.props.changeAside(item)
        }
    }
    // onChangeAside=(item)=>{
    //     return ()=>{
    //         this.setState({
    //             checkCate:item
    //         })
    //     }
    // }
    goTo=(item)=>{
        const history=this.props.history;
        history.push({pathname:'/list',state:{title:item}})
    }
    render() {
        const {cate}=this.state
        const {checkCate,categoryType}=this.props
        return (
            <MenuList
                // cate={cate&&cate[this.props.type]}
                cate={cate&&cate[categoryType]}
                checkCate={checkCate}
                onAsideClick={this.onChangeAside}
                onClickGo={this.goTo}
            ></MenuList>
        )
    }
}
export default Menu
import React, { Component } from 'react'
import { request } from '../../../utils/request'
import PropTypes from 'prop-types'
import MenuList from '../ui/MenuList'

export default class Menu extends Component {
    constructor(props){
        super(props)
        this.state={
            cate:null,
            checkCate:this.props.type==="category"?"主食":"粮食",
            type:'category'//多创建的state,用于对比nextProps和preState
        }
    }
    static propTypes={
        type:PropTypes.string
    }
    /**
     *  getDerivedStateFromProps(nextProps,preState)
     * 使用条件：当父组件和子组件操作同一个state的时候使用。
     * @param {*} nextProps 父组件传递的props
     * @param {*} preState 更改之前state
     * @returns null表示不做任何处理，{}表示要更改的state
     */
    // getDerivedStateFromProps(nextProps,preState)当父组件和子组件同
    static getDerivedStateFromProps(nextProps,preState){
        if(nextProps.type===preState.type){
            console.log('-----------')
            return null
        }else{
            console.log('+++++++++++++++++')
            return {
                checkCate:nextProps.type==="category"?"主食":"粮食",
                type:nextProps.type
            }
        }
    }
    componentDidMount(){
        request('/api/category').then(res=>{
            console.log(res)
            this.setState({
                cate:res.data
            })
        }).catch(err=>{
            console.error(err);
        })
    }
    changeAside=(item)=>{
        return ()=>{
            this.setState({
                checkCate:item
            })
        }
    }
    render() {
        const {cate,checkCate}=this.state
        console.log(this.props.type)
        console.log(checkCate)
        return (
            <MenuList
                cate={cate&&cate[this.props.type]}
                checkCate={checkCate}
                onAsideClick={this.changeAside}
            ></MenuList>
        )
    }
}

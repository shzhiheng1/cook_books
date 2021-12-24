import React, { Component } from 'react'
import NavBack from '@/components/navback/NavBack'
import {DetailContainer} from './StyledDetail'

export default class Detail extends Component {
    state={
        info:{
            url:'',
            name:'',
            collection:'',
            like:''
        }
    }
    componentDidMount(){
        const info=this.props.location.state
        if(info){
            this.setState(()=>({
                info:info
            }))
        }
    }
    render() {
        const {url,name,collection,like}=this.state.info
        return (
            <DetailContainer>
                <NavBack />
                <img src={url&&url} alt="" />
                <div className='detail-info'>
                    <h1>{name&&name}</h1>
                    <h3>点赞 {collection&&collection} 收藏 {like&&like}</h3>
                    <button>收藏</button>
                </div>
            </DetailContainer>
        )
    }
}

import React, { Component } from 'react'
import { Container,SearchBorder,NoHasBorder } from './StyleSearch';
import SvgIcon from '../svgicon/Svgicon';

export default class Search extends Component {
    componentDidMount(){
        var ratio=window.devicePixelRatio
        console.log('设备像素比===',ratio)
    }
    render() {
        return (
            <Container {...this.props}>
                {
                    this.props.hasBorder?
                    (<SearchBorder {...this.props}>
                        <SvgIcon fill="#a0a32a"  iconID="search-plus"/>
                        <span>在这里搜索</span>
                     </SearchBorder> )
                    :(
                    <NoHasBorder {...this.props}>
                        <SvgIcon fill="#a0a32a"  iconID="search-plus"/>
                        <span>在这里搜索</span>
                    </NoHasBorder>
                    )
                }
                

            </Container>
        )
    }
}

import React, { Component } from 'react'
import { Container } from './StyleSearch';
import SvgIcon from '../svgicon/Svgicon';

export default class Search extends Component {
    render() {
        return (
            <Container {...this.props}>
                <div className='search-inter'>
                    <SvgIcon fill="#a0a32a"  iconID="search-plus"/>
                    <span>在这里搜索</span>
                </div>
                
            </Container>
        )
    }
}

import React, { Component } from 'react'
// import logoSvg from '@/assets/images/svg/search-plus.svg';
import { Container } from './StyleSearch';
import Svgicon from '../svgicon/Svgicon';

export default class Search extends Component {
    render() {
        return (
            <Container>
                    <Svgicon name="search-plus"  />
                    {/* <img src={logoSvg} alt="search" />    */}
                    {/* <svg><use xlinkHref="#search-plus"></use></svg> */}
                    <span>在这里搜索</span>
            </Container>
        )
    }
}

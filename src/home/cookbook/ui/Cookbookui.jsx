import React from 'react'
import {Container} from '../ui/StyleCookBook'
import PropTypes from 'prop-types'
import memoizeOne from 'memoize-one'

import Swipers from '../ui/Swipers'
import Search from '@/components/search/Search'
import Hotcate from '../ui/Hotcate'




export default function Cookbookui(props) {
    const swiper=memoizeOne((list)=>{
        return list.slice(0,3)
    })
    const hotcate=memoizeOne((list)=>{
        return list.slice(0,4)
    })
    return (
        <Container>
            <header>美食大全</header>
            <Swipers list={swiper(props.list)}/>
            <Search />
            <Hotcate list={hotcate(props.list)} />
        </Container>
    )
}
// 函数式组件使用类型检查
Cookbookui.propTypes={
    list:PropTypes.array
}

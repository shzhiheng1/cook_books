import React from 'react'
import {Container} from '../ui/StyleCookBook'
// import PropTypes from 'prop-types'
import memoizeOne from 'memoize-one'
import { useHistory } from 'react-router-dom'

import Swipers from '../ui/Swipers'
import Search from '@/components/search/Search'
import Hotcate from '../ui/Hotcate'




export default function Cookbookui(props) {
    const history=useHistory()
    const swiper=memoizeOne((list)=>{
        return list.slice(0,3)
    })
    const hotcate=memoizeOne((list)=>{
        return list.slice(0,4)
    })
    const clickItem=(item)=>{
        return  history.push({pathname:'/list',state:{title:item.title}})
    }
    return (
        <Container>
            <header>美食大全</header>
            <Swipers list={swiper(props.list)}/>
            <Search
              outBg="#eee"
              interBg="#fff"
              hasBorder={true}
              radius={0.2}
              color="#ee742f"
              width={'1px'}
            />
            <Hotcate 
              list={hotcate(props.list)} 
              handeClick={clickItem}
            />
        </Container>
    )
}
// 函数式组件使用类型检查
// Cookbookui.propTypes={
//     list:PropTypes.array
// }

import React from 'react'
import { Grid } from 'antd-mobile'

import {HotContainer,CateTitle} from './StyleCookBook'

export default function Hotcate(props) {
    const list=props.list;
    return (
        <HotContainer>
            <CateTitle
               width='0 0 1px 0' 
               color='#666'
            >热门分类</CateTitle>
            <div className='grid-wrap'>
                <Grid columns={3} gap={2}>
                    {
                        list.map(item=>{
                           return (
                            <Grid.Item 
                               key={item.title}
                               onClick={()=>props.handeClick(item)}
                            >
                                <div  className='grid-item-container'>
                                    <img src={item.url} alt='图片' />
                                    <p>{item.title}</p>
                                </div>
                            </Grid.Item>
                           )
                        })
                    }
                    <Grid.Item>
                        <div className='grid-item-container'>更多。。。</div>
                    </Grid.Item>
                </Grid>
            </div>
           
        </HotContainer>
    )
}

import React from 'react'
import { Grid } from 'antd-mobile'

import {HotContainer} from './StyleCookBook'

export default function Hotcate() {
    return (
        <HotContainer>
            <h1>热门分类</h1>
            <div className='grid-wrap'>
                <Grid columns={3} gap={2}>
                    <Grid.Item>
                        <div  className='grid-item-container'>A</div>
                    </Grid.Item>
                    <Grid.Item>
                        <div className='grid-item-container'>B</div>
                    </Grid.Item>
                    <Grid.Item>
                        <div className='grid-item-container'>C</div>
                    </Grid.Item>
                    <Grid.Item>
                        <div className='grid-item-container'>D</div>
                    </Grid.Item>
                    <Grid.Item>
                        <div className='grid-item-container'>更多。。。</div>
                    </Grid.Item>
                </Grid>
            </div>
           
        </HotContainer>
    )
}

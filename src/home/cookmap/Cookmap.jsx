import React from 'react'
import {NavBar} from 'antd-mobile'
import './Cookmap.less'

export default function Cookmap() {
    return (
        <div className='map-wrap'>
            <NavBar 
               backArrow={false}
               style={{
                 background:'#ee742f',
                 color:'#fff',
                 '--height':'1.4rem'
               }}
            >
                公司地图
            </NavBar>
            <iframe src="/baidumap.html" title='百度地图' frameBorder="0" className='iframe-map'></iframe>
        </div>
    )
}

import React from 'react'
import './Cookmap.less'

export default function Cookmap() {
    return (
        <div className='map-wrap'>
            <iframe src="/baidumap.html" title='百度地图' frameBorder="0" className='iframe-map'></iframe>
        </div>
    )
}

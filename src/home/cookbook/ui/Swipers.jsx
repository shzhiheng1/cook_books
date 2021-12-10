import React from 'react'
import { Swiper, Toast } from 'antd-mobile'

import './swipers.less'

function Swipers(props){
    const list=props.list;
    const items = list.map((item, index) => (
      <Swiper.Item key={index}>
        <div
          className="swipers-item"
          onClick={() => {
            Toast.show(`你点击了卡片 ${index + 1}`)
          }}
        >
          {
            item.url&& <img src={item.url}  alt='图片'/>
          }
          {
             !item.url&&<span>{index + 1}</span>
          }
        </div>
      </Swiper.Item>
    ))
    return(
        <Swiper autoplay loop>{items}</Swiper>
    )
}

export default Swipers;
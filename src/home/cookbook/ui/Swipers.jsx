import React from 'react'
import { Swiper, Toast } from 'antd-mobile'
import Dusto from '@/assets/images/dusto.png'
import Icon from '@/assets/images/icon.png'

import './swipers.less'



// const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']
const list=[
  {
    color:'#ace0ff',
    image:Dusto
  },
  {
    color:'#bcffbd',
    image:Icon
  },
  {
    color:'#e4fabd',
  },
  // {
  //   color:'#ffcfac',
  //   image:Dusto
  // },
]

const items = list.map((item, index) => (
  <Swiper.Item key={index}>
    <div
      className="swipers-item"
      style={{ background: item.color }}
      onClick={() => {
        Toast.show(`你点击了卡片 ${index + 1}`)
      }}
    >
      {
        item.image&& <img src={item.image}  alt='图片'/>
      }
      {
         !item.image&&<span>{index + 1}</span>
      }
    </div>
  </Swiper.Item>
))

function Swipers(){
    return(
        <Swiper autoplay loop>{items}</Swiper>
    )
}

export default Swipers;
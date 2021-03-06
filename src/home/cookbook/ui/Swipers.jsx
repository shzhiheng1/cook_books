import React from 'react'
import { Swiper, Toast } from 'antd-mobile'
import PropTypes from 'prop-types'

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
            list.length>0&& <img src={item.url}  alt='图片'/>
          }
        </div>
      </Swiper.Item>
    ))
    return(
      <div className='swiper-wrap'>
        {
          list.length>0&&<Swiper autoplay loop>{items}</Swiper>
        }
      </div>
    )
}
Swiper.propTypes={
  list:PropTypes.array
}
export default Swipers;
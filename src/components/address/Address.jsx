import React, { useState } from 'react'
import { Cascader ,Input} from 'antd-mobile'
import {options} from './address.js'
// 基础用法
function Address(props) {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState([])
  const [label, setLabel] = useState('')
 const onConfirm=()=>{
     return (v,e)=>{
        const labelVal=e.items.map(item=>item.label)
        setLabel(labelVal.join(' '))
        setValue(v)
        // 发送给父组件
        props.sendFn(v)
      }
  }

  return (
    <>
      <Input placeholder='请选择' value={label} onClick={
          ()=>{
              setVisible(true)
          }
      }/>
      <Cascader
        options={options}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        value={value}
        onConfirm={onConfirm()}
      />
    </>
  )
}
export default Address
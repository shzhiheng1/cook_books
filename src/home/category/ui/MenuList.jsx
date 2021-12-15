import React from 'react'
import PropTypes from 'prop-types'
import {MenuWrap} from '../container/StyledCategory'

export default function MenuList(props) {
    const {cate,checkCate,onAsideClick}=props
    return (
        <MenuWrap>
                <aside>
                    <ul>
                        {
                            cate&&Object.keys(cate).map(item=>{
                                return (
                                    <li key={item} className={item===checkCate?'active':''} onClick={onAsideClick(item)}>
                                        <span>
                                            {item}
                                        </span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </aside>
                <section>
                    <ul>
                       {
                          cate&&cate[checkCate].map(item=>{
                              return(
                                <li key={item}>{item}</li>
                              )
                          })
                       }
                    </ul>
                </section> 
            </MenuWrap>
    )
}
MenuList.prototype={
    cate:PropTypes.object,
    checkCate:PropTypes.string,
    onAsideClick:PropTypes.func
}
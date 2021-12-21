import styled from "styled-components";
import border from "@/assets/styled/border.js"
import ellipsis from '@/assets/styled/ellipsis.js'
const ContainerList=styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    .order-list{
        flex:1;
        overflow:scroll;
    }

`
const LiBorder=border(styled.li `
    display:flex; 
    background:#fff;
    box-sizing: border-box;
    padding: 0.2rem;
    img{
        width:3rem;
        height:2.5rem;
        margin-right:1rem;
    }
    div{
        flex:1; 
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        box-sizing: border-box;
        padding: 0.15rem 0;
    }
    h1{
       font-size:0.5rem;
    }
     h3{
        font-size:0.35rem;
        font-weight:normal;
        color:#999;
     }
`)

const EllipsisH2=ellipsis(
    styled.h2`
        font-size:0.4rem;
        font-weight:normal;
    `
)

export {
    ContainerList,
    LiBorder,
    EllipsisH2 
}
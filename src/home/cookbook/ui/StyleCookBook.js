import styled from "styled-components";
import border from '@/assets/styled/border'

const Container=styled.div `
    header{
        color:#fff;
        background:#ff0000;
        width:100%;
        height:2.133333rem;
        text-align:center;
        line-height:2.133333rem;
        font-size:.6rem;
    }  
`
const HotContainer=styled.div`
    .grid-wrap{
        background:#fff;
        padding-top:0.2rem;
    }
    .grid-item-container{
        height:3rem;
        font-size:0.5rem;
        display:flex;
        background:#eee;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        >img{
            width:1.5rem;
            height:2rem;
        }
        >p{
            color:#666;
            margin-top:0.1rem;
        }
    }
`
const CateTitle=border(
    styled.div`
        height:1.5rem;
        line-height:1.5rem;
        padding-left:0.5rem;
        background:#fff;
        font-size:0.4rem;
        font-weight:600;
    `
)
export{
    Container,
    HotContainer,
    CateTitle
}

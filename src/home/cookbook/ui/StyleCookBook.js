import styled from "styled-components";

const Container=styled.div `
    header{
        color:#fff;
        background:#ff0000;
        width:10rem;
        height:2.133333rem;
        text-align:center;
        line-height:2.133333rem;
        font-size:.6rem;
    }  
`
const HotContainer=styled.div`
    h1{
        height:1.5rem;
        line-height:1.5rem;
        padding-left:0.5rem;
        background:#fff;
        font-size:0.4rem;
        font-weight:600;
        border-bottom:1px solid #999;
    }
    .grid-wrap{
        background:#fff;
        padding-top:0.2rem;
    }
    .grid-item-container{
        background:#ff00ff;
        height:3rem;
        font-size:0.45rem;
    }
`

export{
    Container,
    HotContainer
}

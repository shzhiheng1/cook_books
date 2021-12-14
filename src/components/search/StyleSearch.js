import styled from "styled-components";

const Container =styled.div `
   background:${(props)=>props.outBg};
   padding:.3rem .6rem;
   .search-inter{
        height:1rem;
        margin:0rem auto;
        border:${(props)=>props.hasBorder?'1px solid #0a0':''};
        border-radius: 0.2rem;
        display: flex;
        align-items:center;
        justify-content: center;
        color:#0a0;
        background:${(props)=>props.interBg};
        svg{
            display:inline-block;
            width:0.5rem;
            height:0.5rem;
            margin-right:0.2rem;
        }
        span{
            font-size:0.45rem;
        }
   }
   
`
export {
    Container
}
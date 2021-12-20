import styled from "styled-components";
import border from "@/assets/styled/border";

const Container=styled.div `
   background:${(props)=>props.outBg};
   padding:.3rem .6rem;
`

const SearchBorder=border(styled.div`
        height:1rem;
        margin:0rem auto;
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
`)

const NoHasBorder=
    styled.div`
        height:1rem;
        margin:0rem auto;
        display: flex;
        align-items:center;
        justify-content: center;
        color:#0a0;
        background:${(props)=>props.interBg};
        border-radius:${({radius})=>radius||0}rem;
        svg{
            display:inline-block;
            width:0.5rem;
            height:0.5rem;
            margin-right:0.2rem;
        }
        span{
            font-size:0.45rem;
        }
`

export {
    Container,
    SearchBorder,
    NoHasBorder
}
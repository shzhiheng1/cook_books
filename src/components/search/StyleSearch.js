import styled from "styled-components";

const Container =styled.div `
   width:8rem;
   height:1rem;
   margin:0.3rem auto;
   border: 1px solid #0a0;
   border-radius: 0.2rem;
   display: flex;
   align-items:center;
   justify-content: center;
   color:#0a0;
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
    Container
}
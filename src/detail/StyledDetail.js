import styled from 'styled-components';

const DetailContainer=styled.div `
   background:#fff;
   height:100vh;
   img{
       width:100%;
       height:12rem;
   }
   .detail-info{
       width:100%;
       height:4rem;
       background:#fff;
       display:flex;
       flex-direction:column;
       align-items:center;
       justify-content:space-around;
       h1{
           font-size:0.6rem;
       }
       button{
           width:2rem;
           height:1rem;
           border:0;
           background:#ee742f;
           border-radius:0.2rem;
           color:#fff;
           font-size:0.4rem;
       }
   }
`

export {
    DetailContainer
}
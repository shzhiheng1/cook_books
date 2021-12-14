import styled from "styled-components";

const CategoryWrap=styled.div`
   nav{
       height:1.4rem;
       background-color:#ee742f;
       display:flex;
       align-items:center;
       justify-content:center;
       ul{
           width:3.6rem;
           height:1rem;
           display:flex;
           border:1px solid #fff;
           border-radius:0.7rem;
           position:relative;
           li{
             flex:1;
             line-height:1rem;
             text-align:center;
             color:#fff; 
             transition:all 200ms ease-in;
             &.slide{
                 position:absolute;
                 left:0;
                 width:1.8rem;
                 height:1rem;
                 background:#fff;
                 z-index:2;
                 border-radius:0.7rem;
             } 
             &.slide.right{
                left:1.8rem;
             }
             &.active{
                 color:#ee742f;
                 z-index:3;
             } 

           }

       }
   }
`
export {
    CategoryWrap
}
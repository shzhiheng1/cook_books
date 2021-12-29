import styled from "styled-components";

const CategoryWrap=styled.div`
   height: calc(100vh - 4.333333rem);
   nav{
       height:1.4rem;
       background-color:#ee742f;
       display:flex;
       align-items:center;
       justify-content:center;
       font-size:0.5rem;
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
const MenuWrap=styled.div `
   display:flex;
   height:calc(100vh - 4.333333rem);
   overflow:hidden;
   border-top:solid 1px #aaa;
   aside{
       width:3rem;
       height:100%;
       overflow:scroll;
       font-size:0.6rem;
       li{
           height:1.5rem;
           text-align:center;
           line-height:1.5rem;
       }
       li.active{
            color:#ff0000;
            background:#fff;
            span{
                border-bottom:1px solid #ff0000;
                display:inline-block;
                height:1.5rem;
            }
       }
   }
   section{
       flex:1;
       background:#fff;
       overflow:scroll;
       height:100%;
       font-size:0.5rem;
       ul{
           display:flex;
           flex-wrap:wrap;
           li{
               width:33.3333333%;
               text-align:center;
               height:1.2rem;
               line-height:1.2rem;
           }
       }
   }

`
export {
    CategoryWrap,
    MenuWrap
}
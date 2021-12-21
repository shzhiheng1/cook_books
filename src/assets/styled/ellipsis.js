import styled from "styled-components";

const ellipsis=(interComponent)=>{
     const outComp=styled(interComponent)`
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: ${({line}) => line || 1};
        -webkit-box-orient: vertical;
     `
     return outComp
}
export default ellipsis
import styled from "styled-components"
const border=(WrapedComp)=>{
    const outComp=styled(WrapedComp)`
       position:relative;
       border-radius:${({radius})=>radius}rem;
       &::after{
           pointer-events:none;
           position:absolute;
           top:0;
           left:0;
           z-index:999;

           content:"";
           border-color:${({color})=>color||'#ff0000'};
           border-style:${({style})=>style||'solid'};
           border-width:${({ width } )=>width || '1px'};

           @media 
           (max--moz-device-pixel-ratio:1.49),
           (-webkit-max-device-pixel-ratio:1.49),
           (max-device-pixel-ratio:1.49)
           {
               width:100%;
               height:100%;
               transform:scale(1);
               border-radius:${({radius})=>radius*1 || 0}rem;
           }

           @media 
            (min--moz-device-pixel-ratio:1.5) and (max--moz-device-pixel-ratio:2.49),
            (-webkit-min-device-pixel-ratio:1.5) and (-webkit-max-device-pixel-ratio:2.49),
            (min-device-pixel-ratio:1.5) and (max-device-pixel-ratio:2.49)
           {
            width:200%;
            height:200%;
            transform:scale(0.5);
            border-radius:${({radius})=>radius*2 || 0}rem;
           }

           @media (min--moz-device-pixel-ratio:2.5),(-webkit-min-device-pixel-ratio:2.5),(min-device-pixel-ratio:2.5){
            width:300%;
            height:300%;
            transform:scale(0.33333334);
            border-radius:${({radius})=>radius*3 || 0}rem;
          }
          transform-origin:0 0;
       }
    `
    return outComp
}
export default border
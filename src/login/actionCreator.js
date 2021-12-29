import { TOKEN } from "./actionTypes";

const setTokenSync=(token)=>{
    return{
        type:TOKEN,
        token
    }
}
export {
    setTokenSync 
}
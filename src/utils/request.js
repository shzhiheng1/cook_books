import axios from "axios";

export function request(url) {
    const env= process.env.REACT_APP_ENV
    const baseURL=process.env.REACT_APP_BASE_URL
    console.log(env,baseURL)
    return new Promise((resolve,reject)=>{
        const instance=axios.create({
            baseURL,
            timeout:5000
        })
        instance.get(url).then(res=>{
            resolve(res.data);
        }).catch(err=>{
            reject(err)
        })
    })
}
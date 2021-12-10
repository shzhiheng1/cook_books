import axios from "axios";

export function request(url) {
    return new Promise((resolve,reject)=>{
        const instance=axios.create({
            baseURL:'http://localhost:3000',
            timeout:5000
        })
        instance.get(url).then(res=>{
            resolve(res.data);
        }).catch(err=>{
            reject(err)
        })
    })
}
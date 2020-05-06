//使用axios进行异步操作
import axios from "axios"
import {message} from "antd"
message.config({
    top: 200
})
const service = axios.create({
    baseURL:"http://rap2.taobao.org:38080/app/mock/253046"
})

//axios的拦截器
//请求之前的拦截
service.interceptors.request.use(config=>{
    console.log("request-config",config)
    //后续authToken值肯定需要从本地存储取出来，然后再去发给后端
    // config.data = {...config.data,authToken:"adjlsajdlaoeuasd"}
    // return config
})




//响应之后的拦截
service.interceptors.response.use(res=>{
    console.log("response-res",res)
    // if(res.data.code === 200){
    //     return res.data.data
    // }else{
    //     message.error(res.data.errMsg)
    // }
})



//请求文章列表数据
export const getArticle = ()=>{
    return service.post("/login")
}
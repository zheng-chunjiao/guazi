import axios from "axios"

const service = axios.create({
    baseURL : " http://rap2api.taobao.org/app/mock/238556/"
})

// 请求劫持
service.interceptors.request.use(config=>{
  return config
})

// 响应劫持
service.interceptors.response.use(res=>{
    console.log(res.data)
    return res.data
})
export default service
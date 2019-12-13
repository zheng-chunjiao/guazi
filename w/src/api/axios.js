import axios from 'axios'
const service=axios.create({
    // baseURL:'http://rap2.taobao.org/repository/editor?id=238556&itf=1403591'
    baseURL:'http://rap2api.taobao.org/app/mock/238556/'
    
})
service.interceptors.request.use(config=>{
    
    return config
})
service.interceptors.response.use(res=>{
    // console.log(res.data)
    return res.data

})

export default service
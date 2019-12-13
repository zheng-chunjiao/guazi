import axios from './axios'
export const getArticleList=()=>{
    return axios.post('/api/carList')
}
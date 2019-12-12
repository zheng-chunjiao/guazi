import axios from "./axios"

export const getDetailsData = ()=>{
    return axios.post("/api/carList")
}


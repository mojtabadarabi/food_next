import { axiosInstance } from "@/lib";

export const signUserApi = async (payload: { username: String, password: String }) => {
    return axiosInstance.post('/api/sign',payload,{
        baseURL:''
    })
}
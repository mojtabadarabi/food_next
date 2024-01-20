import { axiosInstance } from "@/lib";

export const getUser = async () => {
    const { data } = await axiosInstance.get('user');
    return data;
}

export const signUserApi = async (payload: { username: String, password: String }) => {
    return axiosInstance.post('/api/sign', payload, {
        baseURL: ''
    })
}

export const logoutUserApi = async () => {
    return axiosInstance.get('/api/logout', {
        baseURL: ''
    })
}

export const changeRoleApi = async (payload: { role: String, userId: String }) => {
    return axiosInstance.post('/api/change-role',payload, {
        baseURL: '',
    })
}

export const getUsersApi = async () => {
    return axiosInstance.get('/api/users',{
        baseURL: '',
    })
}

export const searchUserApi = async (payload: { username:String }) => {
    return axiosInstance.post('/api/search-user',payload, {
        baseURL: '',
    })
}
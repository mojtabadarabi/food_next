import { axiosInstance } from "@/lib";

export const addAdminsApi = async (payload: { ids:String[] }) => {
    return axiosInstance.post('/api/add-admins',payload, {
        baseURL: '',
    })
}
export const deleteAdminsApi = async (payload: { ids:String[] }) => {
    return axiosInstance.post('/api/delete-admins',payload, {
        baseURL: '',
    })
}
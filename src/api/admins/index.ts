import { axiosInstance } from "@/lib";

export const addAdminsApi = async (payload: { ids:String[] }) => {
    return axiosInstance.post('/api/add-admins',payload, {
        baseURL: '',
    })
}
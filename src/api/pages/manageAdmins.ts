import { axiosInstance } from "@/lib";

export const getManageAdminsPageApi = async () => {
    const {data} = await axiosInstance.get('/api/manage-admins',{baseURL:''});
    return data;
}
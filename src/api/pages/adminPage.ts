import { axiosInstance } from "@/lib";

export const getAdminPageApi = async () => {
    const {data} = await axiosInstance.get('pages/admin-page');
    return data;
}
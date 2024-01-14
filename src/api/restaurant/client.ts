import { axiosInstance } from "@/lib";

export const getRstaurantApi = async (id: string) => {
    const { data } = await axiosInstance.get('restaurant/client/' + id);
    return data;
}
export const changeApprovalApi = async (payload: { ids: string[], type: string, isApproval: boolean }) => {
    return axiosInstance.post('/api/approval', payload, {
        baseURL: '',
    })
}
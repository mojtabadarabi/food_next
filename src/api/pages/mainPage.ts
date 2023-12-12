import { axiosInstance } from "@/lib";

export const getMainPageApi = async () => {
    const {data} = await axiosInstance.get('pages/main-page');
    return data;
}
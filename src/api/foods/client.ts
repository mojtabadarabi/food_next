import { axiosInstance } from "@/lib";

export const getFoodsApi = async () => {
    const {data} = await axiosInstance.get('food/client');
    return data;
}
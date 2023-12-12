import { axiosInstance } from "@/lib";

export const getRstaurantsApi = async () => {
    const {data} = await axiosInstance.get('restaurant/client');
    return data;
}
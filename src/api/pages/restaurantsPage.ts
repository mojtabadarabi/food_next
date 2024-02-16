import { axiosInstance } from "@/lib";

export const getRestaurantPageApi = async () => {
    const {data} = await axiosInstance.get('pages/restaurants');
    return data;
}
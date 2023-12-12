import { axiosInstance } from "@/lib";

export const getRstaurantApi = async (id:string) => {
    const {data} = await axiosInstance.get('restaurant/client/'+id);
    return data;
}
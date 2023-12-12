import { axiosInstance } from "@/lib";

export const CreateRestaurantApi = async (payload: {
    name: String, description: String,
    address: String,
    adminUserName: String,
    adminPassword: String
}) => {
    return axiosInstance.post('restaurant/client', payload)
}

export const getAdminRstaurantsApi = async () => {
    const {data} = await axiosInstance.get('restaurant/client');
    return data;
}
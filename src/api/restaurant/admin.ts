import { axiosInstance } from "@/lib";

export const getAdminRstaurantApi = async (id:string) => {
    const {data} = await axiosInstance.get('restaurant/client/'+id);
    return data;
}

export const CreateRestaurantApi = async (payload: {
    name: String, description: String,
    address: String,
    adminUserName: String,
    adminPassword: String
}) => {
    return axiosInstance.post('/api/create-restaurant', payload,{baseURL:''})
}

export const editRestaurantApi = async (payload: {
    id: string,
    name: String, description: String,
    address: String,
    adminUserName: String,
    adminPassword: String
}) => {
    return axiosInstance.put('restaurant/client/' + payload.id, payload)
}

export const deleteRestaurantApi = async (id: string) => {
    return axiosInstance.delete('restaurant/client/' + id)
}
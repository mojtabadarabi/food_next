import {axiosInstance} from "@/lib";

export const getFoodApi = async (id: string) => {
    if (id) {
        const { data } = await axiosInstance.get('food/client/' + id);
        return data;
    }
    return null
}
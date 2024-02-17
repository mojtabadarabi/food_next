import { axiosInstance } from "@/lib";

export const getRestaurantPageApi = async ({ page = null, paginate }: { page?: number | null, paginate: number }) => {
    const { data } = await axiosInstance.post('pages/restaurants' + (page ? `?page=${page}` : ''), { paginate });
    return data;
}
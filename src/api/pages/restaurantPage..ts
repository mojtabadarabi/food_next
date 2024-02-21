import { axiosInstance } from "@/lib";

export const getRestaurantPageApi = async ({ restaurantId, page = null, paginate }: { restaurantId: string, page?: number | null, paginate: number }) => {
    const { data } = await axiosInstance.post(`pages/restaurants/${restaurantId}` + (page ? `?page=${page}` : ''), { paginate });
    return data;
}
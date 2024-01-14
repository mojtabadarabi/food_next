import { deleteRestaurantApi } from '@/api/restaurant/admin';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import useRestaurantsTable from './useRestaurantsTable';


export function AdminRestaurants({ data }: any) {
    const queryClient = useQueryClient()
    const { mutate } = useMutation({
        mutationFn: deleteRestaurantApi,
        mutationKey: ['deleteRestaurant'],

        onSuccess: (data) => {
            console.log(data)
            queryClient.invalidateQueries({ queryKey: ['admin_restaurants'] })
        }
    })
    const { Table } = useRestaurantsTable({ restaurants: data.data })
    console.log(data)
    return (
        <main
            className={``}
        >
            <Table/>
            <div>
                <Link href={'/admin/restaurants/create'}>Add restaurant</Link>
            </div>
        </main>
    )
}


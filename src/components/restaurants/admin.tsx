import { deleteRestaurantApi } from '@/api/restaurant/admin';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from '@tanstack/react-query';


export function AdminRestaurants({ data }: any) {
    const queryClient = useQueryClient()
    console.log(data)
    console.log('data')
    const { mutate } = useMutation({
        mutationFn: deleteRestaurantApi,
        mutationKey: ['deleteRestaurant'],

        onSuccess: (data) => {
            console.log(data)
            queryClient.invalidateQueries({ queryKey: ['admin_restaurants'] })
        }
    })

    console.log(data)
    return (
        <main
            className={``}
        >
            <div className='flex flex-col gap-4 p-2 '>
                {
                    data.data.map((item: any) => (
                        <div className='bg-white p-1 m-1 border rounded'>
                            <h1 className='text-xl '>{item.name}</h1>
                            <Link href={'/admin/restaurants/' + item._id}>edit</Link>
                            <button onClick={() => mutate(item._id)}>delete</button>
                        </div>
                    ))
                }
            </div>
            <div>
                <Link href={'/admin/restaurants/create'}>Add restaurant</Link>
            </div>
        </main>
    )
}


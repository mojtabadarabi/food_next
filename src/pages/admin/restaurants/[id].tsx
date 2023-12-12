import { editRestaurantApi, getAdminRstaurantApi } from '@/api/restaurant/admin';
import { getRstaurantApi } from '@/api/restaurant/client';
import useCreationForm from '@/components/restaurants/useCreationForm';
import { reactQuerySsr } from '@/helpers/ReactQuery';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

export default function Page({ id }: { id: string }) {
    const queryClient = useQueryClient()
    const { data } = useQuery({ queryKey: ['admin_restaurant'], queryFn: () => getAdminRstaurantApi(id) })
    console.log(data)
    console.log('data')
    const rotuer = useRouter()
    const { mutate } = useMutation({
        mutationFn: editRestaurantApi,
        mutationKey: ['editRestaurant'],

        onSuccess: (data) => {
            console.log(data)
            queryClient.invalidateQueries({ queryKey: ['admin_restaurant'] })
            rotuer.push('/admin/restaurants')
        }
    })
    const { FormComponent } = useCreationForm({ onSubmit: (restaurant) => mutate({ ...restaurant, id: id }), initialData: data })

    return (
        <div>
            {FormComponent()}
        </div>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    if (!context.query.id) {
        return {
            redirect: {
                permanent: false,
                destination: "/admin/restaurants"
            }
        }
    }
    const id = context.query.id instanceof Array ? context.query.id?.[0] : context.query.id
    const props = await reactQuerySsr({
        context,
        queryKey: ['admin_restaurant'],
        queryFn: () => getAdminRstaurantApi(id)
    })
    return {
        props: {
            ...props,
            id
        }
    }
}


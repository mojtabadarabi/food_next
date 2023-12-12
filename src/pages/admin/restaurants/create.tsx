import { CreateRestaurantApi } from '@/api/restaurants/admin';
import useCreationForm from '@/components/restaurants/useCreationForm';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export default function Page() {
    const rotuer = useRouter()
    const { mutate } = useMutation({
        mutationFn: CreateRestaurantApi,
        mutationKey: ['createRestaurant'],
        onSuccess: (data) => {
            console.log(data)
            rotuer.push('/admin/restaurants')
        }
    })
    const { FormComponent } = useCreationForm({ onSubmit: mutate,initialData:null })

    return (
        <div>
            {FormComponent()}
        </div>
    )
}

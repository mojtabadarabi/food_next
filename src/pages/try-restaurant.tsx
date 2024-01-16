import { CreateRestaurantApi } from '@/api/restaurant/admin'
import useTryRestaurant from '@/components/tryRestaurant/useTryRestaurant'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'

export default function TryRestaurant() {
    const rotuer = useRouter()
    const { mutate, isPending } = useMutation({
        mutationFn: CreateRestaurantApi,
        mutationKey: ['try-restaurant'],
        onSuccess: (data) => {
            rotuer.push('/')
        }
    })

    const { Component } = useTryRestaurant({
        onSubmit: (props: any) => {
            mutate(props)
        },
        isLoading:isPending
    })
    return (
        <div>{Component()}</div>
    )
}

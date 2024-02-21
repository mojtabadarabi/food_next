import LoadingButton from '@/lib/components/LoadingButton'
import { FoodType } from '@/types'
import { Rating } from '@mui/material'
import Image from 'next/image'

interface Props {
    food: FoodType
}

export default function HorizontalSingleFoodCard(props: Props) {
    const { name, description, price, score, images } = props?.food
    return (
        <div className='shadow border p-2 flex items-center justify-start h-[150px] gap-2 rounded-md overflow-hidden'>
            <div className='relative h-full aspect-[16/14] rounded-md overflow-hidden border border-slate-200'>
                <Image alt={images?.[0]?.name || 'cover'} src={images?.[0]?.src ?? '/images/default-food-image.png'} fill={true} objectFit='cover' />
            </div>
            <div className='h-full w-full flex flex-col gap-2'>
                <h1 className='me-auto'>{name}</h1>
                <div className='flex items-center justify-between'>
                    <h6>{description}</h6>
                    <span>{price}</span>
                </div>
                <div className='flex items-center gap-2 mt-auto justify-between'>
                    <Rating name="read-only" value={score} readOnly />
                    <LoadingButton>افزودن به سبد خرید</LoadingButton>
                </div>
            </div>
        </div>
    )
}

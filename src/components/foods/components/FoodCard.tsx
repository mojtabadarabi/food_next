import appRoutes from '@/configs/appRoutes'
import { FoodType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

export default function FoodCard({ food }: { food: FoodType }) {
    const { name, description, price, score, images } = food
    return (
        <div className='border border-slate-300 min-h-[130px] shadow-sm rounded-md flex flex-col sm:flex-row gap-2 '>
            <div className='relative  sm:h-full aspect-[4/3] sm:w-[130px] w-full rounded-md overflow-hidden border border-slate-200'>
                <Image alt={images?.[0]?.name || 'cover'} src={images?.[0]?.src ??'/images/default-food-image.png'} fill={true} objectFit='cover' />
            </div>
            <div className='flex flex-col gap-5 sm:gap-2 p-2 sm:full sm:w-[calc(100%-130px)] sm:h-full'>
                <Link href={appRoutes.singleFood(food._id)} className='text-md font-medium cursor-pointer truncate'>{name}</Link>
                <div className='text-md opacity-70 font-light mt-1 truncate'>{description}</div>
                <div className='flex flex-row justify-between mt-auto'>
                    <span className='text-xs mt-auto opacity-60'>{score.toLocaleString()}</span>
                    <span className='text-xs mt-auto opacity-90'>{price.toLocaleString()} تومان</span>
                </div>
            </div>
        </div>
    )
}

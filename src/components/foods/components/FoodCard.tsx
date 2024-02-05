import appRoutes from '@/configs/appRoutes'
import LoadingButton from '@/lib/components/LoadingButton'
import { FoodType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { BiHeart, BiSolidStar, BiStar } from 'react-icons/bi'

export default function FoodCard({ food }: { food: FoodType }) {
    const { name, description, price, score, images } = food
    return (
        <div className='border bg-white border-slate-300 flex flex-col shadow-sm rounded-md  gap-2 '>
            <div className='relative  sm:h-full aspect-[16/12] w-full rounded-md overflow-hidden border border-slate-200'>
                <Image alt={images?.[0]?.name || 'cover'} src={images?.[0]?.src ?? '/images/default-food-image.png'} fill={true} objectFit='cover' />
            </div>
            <div className='flex flex-col justify-center text-center gap-5 sm:gap-2 p-2 '>
                <Link href={appRoutes.singleFood(food._id)} className='text-xl font-medium cursor-pointer truncate'>{name}</Link>
                <div className='w-full my-3 flex justify-between text-sm'>
                    <div className='flex flex-col  opacity-70 text-start gap-3 truncate'>
                        <span className='flex gap-2 items-center text-md'><BiHeart size={20} /><span>افزودن به علاقه مندی ها </span></span>
                        <span className='flex gap-2 items-center text-md'><BiSolidStar className='text-yellow-600' size={20} /><span>4</span><span>(40 امتیاز)</span></span>
                    </div>
                    <div className='flex flex-col justify-end  gap-3 items-end'>
                        {/* <span className='text-xs  opacity-60'>{score.toLocaleString()}</span> */}
                        <span className='text-xs  opacity-90'>{price.toLocaleString()} تومان</span>
                    </div>
                </div>
                <LoadingButton>افزودن به سبد خرید</LoadingButton>
            </div>
        </div>
    )
}

import { Image } from '@/lib/components'
import { RestaurantType } from '@/types'

export default function SingleRestaurant({ restaurant }: { restaurant: RestaurantType }) {
    const { images, name, description } = restaurant
    return (
        <div className='p-4 '>
            <div className='flex flex-row gap-4 justify-between'>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-3xl'>{name}</h1>
                    <h1 className='text-xl font-light opacity-60'>{description}</h1>
                </div>
                <div className="relative min-w-[500px] min-h-[400px] border border-slate-400 rounded shadow-md">
                    <Image src={images?.[0]?.src} defaultImage='/images/default-restaurant-image.png'/>
                </div>

            </div>
            {/* <div className='flex flex-row w-fit items-center gap-8 ms-auto mt-4'>
                <span className='text-md font-bold opacity-80'>{price?.toLocaleString()} تومان</span>
                <button className='px-10 py-2 rounded-md  bg-[var(--sub-color-plate)] text-white'>افزودن به سبد</button>
            </div> */}
        </div>
    )
}

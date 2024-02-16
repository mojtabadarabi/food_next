import { H1 } from "@/lib/components/heading"
import useSwiper from "@/lib/hooks/useSwiper"
import { RestaurantType } from "@/types"
import Image from "next/image"
import { BiTime } from "react-icons/bi"
import { FiPhoneCall } from "react-icons/fi"
import { GoLocation } from "react-icons/go"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import Error from '../Error'
import Empty from '../Empty'

export default function RestaurantWithSwiper({ restaurants, isError }: { restaurants: RestaurantType[], isError: boolean }) {
    const { getSwiper } = useSwiper({
        slides: restaurants,
        renderSingleSlide: (restaurant: RestaurantType) => {
            return <div className="relative">
                <H1>{restaurant.name}</H1>
                <div className='relative border-2 shadow rounded-md flex flex-row gap-4 aspect-[16/9] md:aspect-[16/5] '>
                    <div className='relative w-full h-[90%]'>
                        <Image fill={true} objectFit='cover' src={'/images/restaurant.png'} alt={restaurant.name} />
                    </div>
                </div>
                <div className="absolute bottom-0 w-full flex justify-center">
                    <div className="bg-white border-2 w-[90vw] md:w-[60vw] xl:w-[40vw] border-[var(--sub-color-plate)] rounded p-4 flex flex-row justify-between gap-8 ">
                        <div className="flex flex-col gap-2 justify-start items-center">
                            <FiPhoneCall size={35} />
                            <span className="text-sm font-light">۰۲۱-۳۳۵۳۵۳۵۴</span>
                            <span className="text-sm font-light">۰۲۱-۳۳۵۳۵۳۵۴</span>
                        </div>
                        <div className="flex flex-col gap-2 justify-start items-center">
                            <GoLocation size={35} />
                            <span className="text-sm font-light">{restaurant.address}</span>
                        </div>
                        <div className="flex flex-col gap-2 justify-start items-center">
                            <BiTime size={35} />
                            <span className="text-sm font-light">همه‌روزه از ساعت ۱۲  الی ۲۳ </span>
                        </div>
                    </div>
                </div>
            </div>
        },
        sliderProps: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        pagination: null,
        navigation: {
            prevEl: '#prev_restaurant',
            nextEl: '#next_restaurant'
        }
    })
    if (isError || !restaurants) return <Error/>
    if (restaurants.length === 0) return <Empty/>
    return (
        <div className="flex justify-center flex-col text-center my-6">
            <div className="relative w-full">
                <div className="absolute  w-full h-full bg-transparent top-0 left-0 flex flex-row justify-between items-center px-4">
                    <div id={'prev_restaurant'} className="cursor-pointer z-[10]"><IoIosArrowForward size={35} color="white" /></div>
                    <div id={'next_restaurant'} className="cursor-pointer z-[10]"><IoIosArrowBack size={35} color="white" /></div>
                </div>
                {getSwiper()}
            </div>
        </div>
    )
}

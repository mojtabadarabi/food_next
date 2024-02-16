import { H1 } from "@/lib/components/heading"
import useSwiper from "@/lib/hooks/useSwiper"
import { FoodType } from "@/types"
import Empty from '../Empty'
import Error from '../Error'
import FoodCard from "./FoodCard"

export default function FoodsWithSwiper({ foods, isError, withBackground, title }: { foods: FoodType[], isError: boolean, withBackground?: boolean, title: string }) {

    const checkFoods = () => {
        if (isError || !foods) return <Error />
        if (foods.length === 0) return <Empty />
        return getSwiper()
    }

    const { getSwiper } = useSwiper({
        slides: foods,
        renderSingleSlide: (slide, index) => {
            return <div>
                <FoodCard food={slide} key={slide._id} />
            </div>
        },
        sliderProps: {
            slidesPerView: 1.1,
            spaceBetween: 20
        },
        breakpoints: {
            576: {
                slidesPerView: 2.1,
            },
            768: {
                slidesPerView: 2.5,
            },
            1024: {
                slidesPerView: 3.5,
            },
            1280: {
                slidesPerView: 4.5,
            },
        }
    })

    return (
        <div className={`p-4 md:ps-[100px] ${withBackground ? 'bg-[var(--sub-color-plate)]' : 'bg-white'} flex flex-col gap-4`}>
            <H1 className={`${withBackground && 'text-white'}`}>{title}</H1>
            <div className=" ">
                {checkFoods()}
            </div>
        </div>
    )
}

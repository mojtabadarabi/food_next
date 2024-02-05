import useSwiper from "@/lib/hooks/useSwiper"
import { FoodType } from "@/types"
import FoodCard from "./FoodCard"

export default function MainFoods({ foods, isError, withBackground, title }: { foods: FoodType[], isError: boolean, withBackground?: boolean, title: string }) {

    if (isError) return <div>error</div>
    if (!foods) return <div>No foods</div>
    if (foods.length === 0) return <div>foods is empty</div>

    const { getSwiper } = useSwiper({
        slides: foods,
        renderSingleSlide: (slide, index) => {
            return <div>
                <FoodCard food={slide} key={slide._id} />
            </div>
        },
        sliderProps: {
            slidesPerView: 4.5,
            spaceBetween: 20
        }
    })

    return (
        <div className={`p-4 ps-[100px] ${withBackground?'bg-[var(--sub-color-plate)]':'bg-white'} flex flex-col gap-4`}>
            <h1 className={`text-2xl font-bold ${withBackground?'text-white':'text-black'}`}>{title}</h1>
            <div className=" ">
                {getSwiper()}
            </div>
            {/* <Link href={appRoutes.allFoods} className='border-2 text-md border-[var(--sub-color-plate)] text-[var(--sub-color-plate)] rounded-md px-4 py-2 w-fit m-auto'>مشاهده کامل غذا ها</Link> */}
        </div>
    )
}

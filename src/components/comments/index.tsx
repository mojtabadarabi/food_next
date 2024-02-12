import LocaleDate from '@/lib/LocaleDate'
import useSwiper from '@/lib/hooks/useSwiper'
import { CommentType } from '@/types'
import { BiSolidStar } from 'react-icons/bi'

export default function index({ comments }: { comments: CommentType[] }) {
    const { getSwiper } = useSwiper({
        slides: comments,
        renderSingleSlide: (slide: CommentType) => {
            console.log(slide.date)
            return <div className='border-2 shadow rounded-md p-4 flex flex-row gap-4 h-full'>
                <div className='flex flex-col justify-center gap-2'>
                    <div className='relative w-[80px] h-[80px] rounded-full overflow-hidden'>
                        <img alt='profile' src={slide.author.profile} />
                    </div>
                    <span className='text-sm fotn-bold text-black text-center'>{LocaleDate.getMomentedDate(new Date(slide.date), 'jDD  jMMMM  jYYYY')}</span>
                </div>
                <div className='h-auto flex flex-col w-full'>
                    <h6 className='text-md font-bold opacity-70'>{slide.text}</h6>
                    <div className='flex flex-row gap-2 mt-auto justify-end'>
                        <span>{slide.rate}</span>
                        <BiSolidStar size={20} className={"text-yellow-500"} />
                    </div>
                </div>
            </div>
        },
        sliderProps: {
            slidesPerView: 2.2,
            spaceBetween: 20
        }
    })
    return (
        <div className='my-4'>
            <h1 className='text-2xl font-bold text-center my-6'>نظرات کاربران</h1>
            {getSwiper()}
        </div>
    )
}

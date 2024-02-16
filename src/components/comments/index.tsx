import LocaleDate from '@/lib/LocaleDate'
import { H1 } from '@/lib/components/heading'
import useSwiper from '@/lib/hooks/useSwiper'
import { CommentType } from '@/types'
import { BiSolidStar } from 'react-icons/bi'
import Empty from './Empty'
import Error from './Error'

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
            slidesPerView: 1.1,
            spaceBetween: 20
        },
        pagination: {
            id: 'commentsPagination',
            className: 'flex justify-center w-full my-8 cursor-pointer relative gap-2'
        },
        breakpoints: {
            576: {
                slidesPerView: 1.1,
            },
            768: {
                slidesPerView: 1.5,
            },
            1024: {
                slidesPerView: 2.5,
            },
            // 1280: {
            //     slidesPerView: 4,
            // },
        }
    })
    const checkComments = () => {
        if (!comments) return <Error />
        if (comments.length === 0) return <Empty />
        return getSwiper()
    }
    return (
        <div className='my-4'>
            <H1 className="text-center">نظرات کاربران</H1>
            {checkComments()}
        </div>
    )
}

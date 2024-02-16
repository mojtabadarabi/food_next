import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
    slides: any,
    renderSingleSlide: (slide: any, index: number) => React.ReactNode,
    sliderProps: null | {
        spaceBetween?: number
        slidesPerView?: number
    },
    pagination?: null | {
        id: String
        className: string
    },
    navigation?: null | {
        prevEl: string,
        nextEl: string,
    }
    breakpoints?: null | Record<number, any>
}

export default function useSwiper(props: Props) {
    const {
        slides,
        renderSingleSlide,
        sliderProps = {
            spaceBetween: 50,
            slidesPerView: 3
        },
        pagination,
        navigation,
        breakpoints
    } = props

    const getSwiper = () => {
        return (
            <Swiper
                className='w-full'
                modules={[Pagination, Navigation]}
                spaceBetween={sliderProps?.spaceBetween}
                slidesPerView={sliderProps?.slidesPerView}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{
                    el: `#${pagination ? pagination.id : '_'}`,
                    clickable: true,
                    renderBullet: (index, className) => {
                        return '<span class="' + className + '">' + "</span>";
                    },
                }}
                navigation={{
                    prevEl: navigation?.prevEl || "_",
                    nextEl: navigation?.nextEl || "_",
                    disabledClass:'opacity-40 cursor-auto'
                }}
                style={{
                    //@ts-ignore
                    "--swiper-pagination-color": "var(--sub-color-plate)",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "12px",
                    // "--swiper-pagination-bullet-horizontal-gap": "6px"
                }}
                breakpoints={breakpoints || {}}
            >
                {
                    slides.map((slide: any, index: number) => (
                        <SwiperSlide>
                            {
                                renderSingleSlide(slide, index)
                            }
                        </SwiperSlide>

                    ))
                }
                {
                    pagination ? (
                        <div id={String(pagination.id)} className={pagination.className} />
                    ) : null
                }
            </Swiper>
        )
    }

    return {
        getSwiper
    }
}

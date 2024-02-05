import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
    slides: any,
    renderSingleSlide: (slide: any, index: number) => React.ReactNode,
    sliderProps: null | {
        spaceBetween?: number
        slidesPerView?: number
    }
}

export default function useSwiper(props: Props) {
    const {
        slides,
        renderSingleSlide,
        sliderProps = {
            spaceBetween: 50,
            slidesPerView: 3
        }
    } = props

    const getSwiper = () => {
        return (
            <Swiper
                className='w-full'
                spaceBetween={sliderProps?.spaceBetween}
                slidesPerView={sliderProps?.slidesPerView}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
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
            </Swiper>
        )
    }

    return {
        getSwiper
    }
}

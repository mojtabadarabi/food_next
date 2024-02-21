import { getRestaurantPageApi } from "@/api/pages/restaurantPage.";
import HorizontalSingleFoodCard from "@/components/foods/components/HorizontalSingleFoodCard";
import appRoutes from "@/configs/appRoutes";
import { INITIAL_PAGE, INITIAL_PAGINATE } from "@/configs/appStatics";
import { reactQuerySsr } from "@/helpers/ReactQuery";
import { H1 } from "@/lib/components/heading";
import usePaginate from "@/lib/hooks/usePaginate";
import useSwiper from "@/lib/hooks/useSwiper";
import { FoodType } from "@/types";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import Empty from "./Empty";
import Error from "./Error";
import Loading from "./Loading";

export default function Index({ id }: { id: string }) {
    const { checkStatus, data, page, paginate, getPagination } = usePaginate({
        Children: () => component(),
        Empty: () => <Empty />,
        Error: () => <Error />,
        Loading: () => <Loading paginate={paginate} />,
        fetchFn: (page, paginate) => getRestaurantPageApi({ restaurantId: id, page, paginate }),
        queryKey: ['restaurant',id],
        postFix: 'foods'
    })

    const { getSwiper } = useSwiper({
        slides: data?.restaurant?.images || [{ name: '' }],
        renderSingleSlide: (restaurant: any) => {
            return (
                <div className='relative border-2 shadow rounded-xl flex flex-row gap-4 aspect-[14/9] md:aspect-[18/5] overflow-hidden '>
                    <div className='relative w-full h-full'>
                        <Image fill={true} objectFit='cover' src={'/images/restaurant.png'} alt={restaurant.name} />
                    </div>
                </div>
            )


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
    console.log(data)
    const component = () => {
        return (
            <div className='flex flex-col w-full gap-4 justify-center text-center'>
                {getSwiper()}
                <div className='flex flex-col gap-8'>
                    <h1 className='text-3xl'>{data?.restaurant?.name}</h1>
                    <h1 className='text-md font-light opacity-80 me-auto'>{data?.restaurant?.description}</h1>
                </div>
                <H1 className={'my-8'}>غذا ها</H1>
                {
                    data?.foods?.data.length === 0 ? <div className="text-xl font-light opacity-60 me-auto text-center m-auto my-8">غذایی وجود ندارد</div> : (
                        <div className="grid grid-cols-2 gap-3 my-2">
                            {data?.foods?.data?.map?.((food: FoodType) => <HorizontalSingleFoodCard key={food._id} food={food} />)}
                        </div>
                    )
                }
                {getPagination()}
            </div>
        )
    }

    return <div className='p-4'>
        <Head>
            <title>فودینو | {data?.restaurant?.name} </title>
        </Head>
        {checkStatus()}
    </div>
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const id = context.query.id instanceof Array ? context.query.id?.[0] : context.query.id
    if (!id) {
        return {
            redirect: {
                permanent: false,
                destination: appRoutes.allRestaurants
            }
        }
    }
    const props = await reactQuerySsr({
        context,
        queryKey: ['restaurant',id],
        queryFn: () => getRestaurantPageApi({ restaurantId: id, page: INITIAL_PAGE, paginate: INITIAL_PAGINATE })
    })
    return {
        props: {
            ...props,
            id
        }
    }
}
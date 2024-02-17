import { getRestaurantPageApi } from '@/api/pages/restaurantsPage'
import { INITIAL_PAGE, INITIAL_PAGINATE } from '@/configs/appStatics'
import { reactQuerySsr } from '@/helpers/ReactQuery'
import { H1 } from '@/lib/components/heading'
import usePaginate from '@/lib/hooks/usePaginate'
import { Pagination } from '@mui/material'
import { GetServerSidePropsContext } from 'next'
import Empty from './Empty'
import Error from './Error'
import Loading from './Loading'
import Filters from './components/Filters'
import Restaurants from './index'
import Head from 'next/head'

export default function route() {
    const { checkStatus, data, page, paginate,getPagination } = usePaginate({
        Children: () => component(),
        Empty: () => <Empty />,
        Error: () => <Error />,
        Loading: () => <Loading paginate={paginate} />,
        fetchFn: (page, paginate) => getRestaurantPageApi({ page, paginate }),
        queryKey: ['restaurants_page']
    })

    console.log(data)

    const component = () => {
        return (
            <div className='flex flex-col w-full gap-4 justify-center'>
                <Restaurants restaurants={data.restaurants.data} />
                {getPagination()}
            </div>
        )
    }
    return (
        <div className='p-4'>
            <Head>
                <title>فودینو | رستوران ها</title>
            </Head>
            <H1>رستوران ها</H1>
            <div className='flex flex-row gap-2 items-start'>
                <div className='w-[20vw]'><Filters /></div>
                {checkStatus()}
            </div>
        </div>
    )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const props = await reactQuerySsr({
        context,
        queryKey: ['restaurants_page', INITIAL_PAGE],
        queryFn: () => getRestaurantPageApi({
            page: INITIAL_PAGE,
            paginate: INITIAL_PAGINATE
        })
    })
    return {
        props: {
            ...props
        }
    }
}
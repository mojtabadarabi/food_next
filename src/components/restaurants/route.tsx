import { getRestaurantPageApi } from '@/api/pages/restaurantsPage'
import { reactQuerySsr } from '@/helpers/ReactQuery'
import { H1 } from '@/lib/components/heading'
import { useQuery } from '@tanstack/react-query'
import { GetServerSidePropsContext } from 'next'
import Restaurants from './index'
import Error from './Error'
import Empty from './Empty'
import Filters from './components/Filters'

export default function route() {
    const { data, isError } = useQuery({ queryKey: ['restaurants_page'], queryFn: () => getRestaurantPageApi() })
    console.log(data)
    if(isError||!data)return <Error/>
    if(data.restaurants.length===0)return <Empty/>
    return (
        <div className='p-4'>
            <H1>رستوران ها</H1>
            <div className='flex flex-row gap-2 items-start'>
                <div className='w-[20vw]'><Filters/></div>
                <Restaurants restaurants={data.restaurants}/>
            </div>
        </div>
    )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const props = await reactQuerySsr({
        context,
        queryKey: ['restaurants_page'],
        queryFn: () => getRestaurantPageApi()
    })
    return {
        props: {
            ...props
        }
    }
}
import { getAdminRstaurantsApi } from '@/api/restaurants/admin';
import { AdminRestaurants } from '@/components';
import { PreparationComponent, reactQuerySsr } from '@/helpers/ReactQuery';
import { useQuery } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';

function Home() {
    const { data } = useQuery({ queryKey: ['admin_restaurants'], queryFn: () => getAdminRstaurantsApi() })
    return (
        <AdminRestaurants data={data} />
    )
}

export default PreparationComponent(Home)

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const props = await reactQuerySsr({
        context,
        queryKey: ['admin_restaurants'],
        queryFn: getAdminRstaurantsApi
    })
    return {
        props
    }
}

import { getAdminPageApi } from '@/api/pages/adminPage'
import appRoutes from '@/configs/appRoutes'
import { isUserHavePermissions, reactQuerySsr } from '@/helpers/ReactQuery'
import { useQuery } from '@tanstack/react-query'
import { GetServerSidePropsContext } from 'next'

export default function index() {
    // const {data} = useQuery({ queryKey: ['admin_page'], queryFn: () => getAdminPageApi() })
    // console.log(data)
    // console.log('data')
    return (
        <div className='p-3'>
            <div className='flex items-center gap-2 '>
                admin ha
            </div>
        </div>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    // const props = await reactQuerySsr({
    //     context,
    //     queryKey: ['admin_page'],
    //     queryFn: () => getAdminPageApi()
    // })
    const user = context.req.cookies['user']
    const isHavePermissions = isUserHavePermissions(JSON.parse(user)?.permissions, ['OWN_MANAGEMENT'])
    if (!isHavePermissions) {
        return {
            redirect: {
                permanent: false,
                destination: appRoutes.home
            }
        }
    }
    return {
        props: {
            // ...props,
        }
    }
}
import { getAdminPageApi } from '@/api/pages/adminPage'
import { getManageAdminsPageApi } from '@/api/pages/manageAdmins'
import {ManageAdmins} from '@/components'
import appRoutes from '@/configs/appRoutes'
import { isUserHavePermissions, reactQuerySsr } from '@/helpers/ReactQuery'
import { useQuery } from '@tanstack/react-query'
import { GetServerSidePropsContext } from 'next'

export default function index() {
    const {data} = useQuery({ queryKey: ['manage-admin-page'], queryFn: () => getManageAdminsPageApi() })

    return (
        <div className=''>
            <ManageAdmins users={data?.restaurantAdmins||[]}/>
        </div>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    await reactQuerySsr({
        context,
        queryKey: ['manage-admin-page'],
        queryFn: () => getManageAdminsPageApi()
    })
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
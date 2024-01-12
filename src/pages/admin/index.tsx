import { getAdminPageApi } from '@/api/pages/adminPage'
import { reactQuerySsr } from '@/helpers/ReactQuery'
import { useQuery } from '@tanstack/react-query'
import { GetServerSidePropsContext } from 'next'

export default function index() {
    const {data} = useQuery({ queryKey: ['admin_page'], queryFn: () => getAdminPageApi() })
    console.log(data)
    console.log('data')
    return (
        <div className='p-3'>
            <div className='flex items-center gap-2 '>
                <div className='border w-[50%] border-yellow-800 flex items-center justify-around rounded-md p-4'>
                    <span className='text-xl font-semibold'>رستوران ها</span>
                    <span className='text-md opacity-80  font-semibold'>{data?.restaurants?.length}</span>
                </div>
                <div className='border w-[50%] border-yellow-800 rounded-md p-4 flex items-center justify-around'>
                    <span className='text-xl font-semibold'>غذا ها</span>
                    <span className='text-md opacity-80 font-semibold'>{data?.foods?.length}</span>
                
                </div>
                
            </div>
        </div>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const props = await reactQuerySsr({
        context,
        queryKey: ['admin_page'],
        queryFn: () => getAdminPageApi()
    })
    return {
        props: {
            ...props,
        }
    }
}
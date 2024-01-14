import { logoutUserApi } from '@/api/user';
import appRoutes from '@/configs/appRoutes';
import { useMutation } from '@tanstack/react-query';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const profile = ({ user }) => {
    const router = useRouter()
    const { mutate, isPending } = useMutation({
        mutationFn: logoutUserApi,
        mutationKey: ['logout'],
        onSuccess: () => {
            user?.logoutUser?.()
            router.push('/')
        }
    })
    console.log(user)
    return (
        <div className='flex p-4 justify-between gap-3'>
            <div className='flex flex-col gap-4 w-[400px] rounded '>
                <div className='bg-yellow-100 border p-2 text-md font-medium'>
                    item
                </div>
                {/* {
                    user?.user?.
                } */}
                {
                    user && user.permissions && (
                        <Link href={appRoutes.admin} className='bg-yellow-100 border p-2 text-center text-md font-medium '>
                            داشبورد
                        </Link>
                    )
                }
                <button onClick={() => mutate()} className='bg-red-100 border p-2 text-md font-medium '>
                    {isPending ? '...' : 'خروج'}
                </button>
            </div>
            <div className='bg-stone-200 p-4 rounded w-full flex items-start justify-start h-full '>
                <h1 className='text-xl font-bold'>Content</h1>
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const refreshTokenCookie = context.req.cookies['refresh_token']
    if (!refreshTokenCookie) {
        return {
            redirect: {
                permanent: false,
                destination: appRoutes.home
            }
        }
    }

    // const props = await reactQuerySsr({
    //     context,
    //     queryKey: ['main_page'],
    //     queryFn: () => getMainPageApi()
    // })

    return {
        props: {

        }
    }
}

export default profile
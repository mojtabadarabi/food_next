import { addAdminsApi } from '@/api/admins'
import { searchUserApi } from '@/api/user'
import useStateProps from '@/helpers/hooks/useStateProps'
import LoadingButton from '@/lib/components/LoadingButton'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import SearchUser from './SearchUser'

export default function useCreateAdmin({afterCreateCallBack}:any) {
    const queryClient = useQueryClient()

    const { props, setStateByKey } = useStateProps({
        initialProps: {
            users: []
        }
    })

    const { mutateAsync, isPending } = useMutation({
        mutationFn: searchUserApi,
        mutationKey: ['search-user'],

    })
    const { mutateAsync: addAdminsMutate, isPending: isPendingAdd } = useMutation({
        mutationFn: addAdminsApi,
        mutationKey: ['add-admins'],

    })

    const searchHandler = (body: any, callBack: any) => {
        mutateAsync(body).then(data => callBack(data?.data))
    }
    const changeUsersHandler = (user) => {
        if (user) {
            let newUsers = [...props.users]
            newUsers.push(user)
            setStateByKey('users', newUsers)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(props)
        const ids = props.users.map(user => user._id)
        addAdminsMutate({ ids }).then(() => {
            queryClient.setQueryData(['manage-admin-page'], cashedData => {
                const restaurantAdmins = [...cashedData.restaurantAdmins]
                props.users.map(user=>{
                    restaurantAdmins.push(user)
                })
                return {
                    ...cashedData,
                    restaurantAdmins
                }
            })
            afterCreateCallBack()
        })
    }

    const Component = () => {
        return (
            <form onSubmit={handleSubmit} className='p-4 flex flex-col gap-4'>
                <span className='text-md font-bold '>جستجوی کاربران</span>
                <SearchUser label={'جستجو بین کاربران'} loading={isPending} onSearch={searchHandler} onSelect={user => changeUsersHandler(user)} />
                <div className='flex gap-4'>
                    {
                        (props?.users || []).map(user => (
                            <div className='bg-slate-400 rounded p-3 text-whtie'>
                                {user.name}
                            </div>
                        ))
                    }
                </div>
                <LoadingButton loading={isPendingAdd}>تایید</LoadingButton>
            </form>
        )
    }

    return {
        Component
    }
}

import { searchUserApi } from '@/api/user'
import useStateProps from '@/helpers/hooks/useStateProps'
import LoadingButton from '@/lib/components/LoadingButton'
import { useMutation } from '@tanstack/react-query'
import SearchUser from './SearchUser'

export default function useCreateAdmin() {
    const { props, setStateByKey } = useStateProps({
        initialProps: {
            users: []
        }
    })

    const { mutateAsync, isPending } = useMutation({
        mutationFn: searchUserApi,
        mutationKey: ['search-user'],

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
    console.log(props)

    const Component = () => {
        return (
            <form className='p-4 flex flex-col gap-4'>
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
                <LoadingButton>تایید</LoadingButton>
            </form>
        )
    }

    return {
        Component
    }
}

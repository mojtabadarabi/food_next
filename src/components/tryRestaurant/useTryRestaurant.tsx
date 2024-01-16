import LoadingButton from "@/lib/components/LoadingButton"
import useStateProps from "../../helpers/hooks/useStateProps"

export default function useTryRestaurant({ onSubmit ,isLoading}:any) {
    const { getProps, props } = useStateProps({
        initialProps: {
            name: "",
            description: '',
            address: '',
        }
    })
    const onSubmitHandler = (e:any) => {
        e.preventDefault()
        onSubmit(props)
    }
    const Component = () => {
        return (
            <form onSubmit={onSubmitHandler} className='flex flex-col gap-8 w-[500px] p-4 bg-white border shadow rounded  mx-auto my-8'>
                <h1 className='text-sm font-bold '>درخواست رستوران</h1>
                <input {...getProps('name')} className='rounded p-2 border outline-none ms-2' placeholder='نام رستوران' />
                <input {...getProps('description')} className='rounded p-2 border outline-none ms-2' placeholder='توضیحات' />
                <textarea {...getProps('address')} rows={10} className='resize-none rounded p-2 border outline-none ms-2' placeholder='آدرس رستوران' />
                <LoadingButton loading={isLoading}>
                    درخواست
                </LoadingButton>
            </form>
        )
    }
    return {
        Component
    }
}

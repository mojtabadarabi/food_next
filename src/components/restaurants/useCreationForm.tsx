
export default function useCreationForm({ onSubmit, initialData }: { initialData: any, onSubmit: (restaurant: any) => void }) {
    const handleSubmitCreate = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            name: { value: string };
            description: { value: string };
            address: { value: string };
            adminUserName: { value: string };
            adminPassword: { value: string };
        };
        onSubmit({
            name: target.name.value,
            description: target.description.value,
            address: target.address.value,
            adminUserName: target.adminUserName.value,
            adminPassword: target.adminPassword.value
        })
    }

    const FormComponent = () => {
        return (
            <form className='flex flex-col gap-3 p-2 ' onSubmit={handleSubmitCreate}>
                <input type='text' defaultValue={initialData?.name} className='rounded border-none w-fit' id={'name'} placeholder={'name'} />
                <input type='text' defaultValue={initialData?.description} className='rounded border-none w-fit' id={'description'} placeholder={'description'} />
                <input type='text' defaultValue={initialData?.address} className='rounded border-none w-fit' id={'address'} placeholder={'address'} />
                <input type='text' defaultValue={initialData?.adminUserName} className='rounded border-none w-fit' id={'adminUserName'} placeholder={'admin username'} />
                <input type='text' defaultValue={initialData?.adminPassword} className='rounded border-none w-fit' id={'adminPassword'} placeholder={'admin passwrod'} />
                <button type='submit' className='w-fit bg-slate-600 rounded px-3 py-1 m-auto text-white'>Create</button>
            </form>
        )
    }
    return {
        FormComponent
    }
}

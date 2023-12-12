
export default function SignForm({ handleSubmitForm, isPending }: { handleSubmitForm: (e: React.SyntheticEvent) => void, isPending: boolean }) {
    return (
        <form onSubmit={handleSubmitForm}
            className="
                border 
                rounded 
                h-full
                m-auto
                my-20
                p-4
                sm:p-8
                w-fit
                border-[#cbd5e1]
                flex 
                flex-col 
                gap-8
                shadow-md
                text-center
            "
        >
            <h1 className="text-2xl sm:text-3xl ">ورود </h1>
            <h1 className="text-md sm:text-sm opacity-60">میتوانید با ورود به سایت از خدمات ما استفاده کنید </h1>
            <input className="border focus:outline-none p-2 rounded-md shadow-xl" id={'username'} type='text' placeholder="phone/email" />
            <input className="border focus:outline-none p-2 rounded-md shadow-xl" id={'password'} type='password' placeholder="password" />
            <button className="flex items-center justify-center p-2 text-2xl bg-[var(--sub-color-plate)] border-none rounded-md text-[var(--main-plate-color)] border w-full" type={'submit'}>
                <span>{isPending?'...':'برو بریم'}</span>
            </button>
        </form>
    )
}

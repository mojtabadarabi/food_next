import Link from "next/link";

export default function Footer() {
    return (
        <div className='bg-[var(--main-color-plate)] p-4 flex flex-row justify-around'>
            <div className='text-white flex flex-col gap-4 text-sm'>
                <h1 className="text-xl font-bold ">دسترسی آسان</h1>
                <Link href={'/'}>پرسش های متداول</Link>
                <Link href={'/'}>قوانین فودینو</Link>
                <Link href={'/'}>حریم خصوصی</Link>
            </div>
            <div className='text-white flex flex-col gap-4 text-sm'>
                <h1 className="text-xl font-bold ">سرویس ها</h1>
                <Link href={'/'}>پشتیبانی</Link>
                <Link href={'/'}>ثبت رستوران</Link>
                <Link href={'/'}>ثبت پیک</Link>
            </div>
            <div className="xl:w-[45%] w-[60%]">
                <h1 className="text-xl font-semibold text-white">پیام به فودینو</h1>
                <form className="flex flex-col gap-4 justify-start p-4">
                    <div className="flex gap-3">
                        <div className="flex flex-col gap-3 w-full">
                            <input className="border border-white rounded bg-transparent text-white text-sm p-2 focus:outline-none placeholder:text-white" placeholder="نام و نام خانوادگی" />
                            <input className="border border-white rounded bg-transparent text-white text-sm p-2 focus:outline-none placeholder:text-white" placeholder="شماره تماس" />
                            <input className="border border-white rounded bg-transparent text-white text-sm p-2 focus:outline-none placeholder:text-white" placeholder="ایمیل (اختیاری)" />
                        </div>
                        <textarea className="border border-white rounded bg-transparent text-white text-sm p-2 focus:outline-none placeholder:text-white w-full" placeholder="پیام شما" />
                    </div>
                    <button className="ms-auto w-fit border border-white text-white px-4 py-1 rounded">
                        ارسال پیام
                    </button>
                </form>
            </div>
        </div>
    )
}

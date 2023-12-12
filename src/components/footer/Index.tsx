import Link from "next/link";

export default function Footer() {
    return (
        <div className='bg-[var(--main-color-plate)] p-4 flex flex-row justify-around'>
            <div className='text-white flex flex-col gap-4 text-sm'>
                <Link href={'/'}>تماس با ما</Link>
                <Link href={'/'}>درباره ما</Link>
                <Link href={'/'}>شعبه ها</Link>
                <Link href={'/'}>گزارش</Link>
                <Link href={'/'}>مجوز ها</Link>
            </div>
            <div>click</div>
            <div>click</div>
        </div>
    )
}

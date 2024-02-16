import { H1 } from '@/lib/components/heading';
import Link from 'next/link';
import { BiSolidDrink } from "react-icons/bi";
import { FaPizzaSlice } from "react-icons/fa6";
import { LuSalad } from "react-icons/lu";
import { MdOutlineKebabDining, MdOutlineSoupKitchen } from "react-icons/md";

export default function FoodsCategory() {
    return (
        <div className='md:ps-[100px]'>
            <H1>دسته بندی</H1>
            <div className='grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 md:p-6 p-2 text-[var(--sub-color-plate)] flex-row justify-between gap-5 '>
                <Link href={'/'} className=' flex justify-center flex-col text-center gap-5'>
                    <MdOutlineKebabDining style={{margin:'auto'}} size={70} />
                    <span className='text-sm m-auto text-black font-bold'>کباب</span>
                </Link>
                <Link href={'/'} className='flex justify-center flex-col text-center gap-5'>
                    <FaPizzaSlice style={{margin:'auto'}} size={70} />
                    <span className='text-sm  text-black font-bold'>پیتزا</span>
                </Link>
                <Link href={'/'} className='flex justify-center flex-col text-center gap-5'>
                    <BiSolidDrink style={{margin:'auto'}} size={70} />
                    <span className='text-sm  text-black font-bold'>نوشیدنی</span>
                </Link>
                <Link href={'/'} className='flex justify-center flex-col text-center gap-5'>
                    <MdOutlineSoupKitchen style={{margin:'auto'}} size={70} />
                    <span className='text-sm  text-black font-bold'>سوپ</span>
                </Link>
                <Link href={'/'} className='flex justify-center flex-col text-center gap-5'>
                    <LuSalad style={{margin:'auto'}} size={70} />
                    <span className='text-sm  text-black font-bold'>سالاد</span>
                </Link>
            </div>
        </div>
    )
}

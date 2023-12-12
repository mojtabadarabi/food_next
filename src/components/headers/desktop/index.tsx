import localFont from 'next/font/local';
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import useGetMainHeaderItems from "../useGetMainHeaderItems";
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../../../../public/font/SOGAND.ttf' })

export default function DesktopHeader() {
  const menuItems = useGetMainHeaderItems()

  return (
    // <div className='flex flex-col items-center justify-center w-full'>
    <div className='sticky top-0 z-[100] h-[80px] w-full bg-[var(--main-color-plate)] p-5 flex items-center justify-between'>
      <Link href={'/'} className={`text-[var(--sub-color-plate)] font-extrabold text-4xl ${myFont.className}`} >
        فودینو
      </Link>
      <div className="sm:flex hidden items-cetner justify-center gap-5 text-white">
        {
          menuItems().map(item => (
            <Link href={item.href} className='group text-sm relative hover:text-[var(--sub-color-plate)]  transition ease-in-out delay-100'>
              {item.title}
              <span className='ease absolute mb-[-8px] bottom-0 right-0 h-0 w-0 border-b-2 border-[var(--sub-color-plate)] transition-all duration-300 group-hover:w-full' />
            </Link>
          ))
        }
      </div>
      <div className='flex items-center justify-center gap-2 text-[var(--sub-color-plate)]'>
        <button>
          <FiShoppingCart size={24} />
        </button>
        <Link href={'/sign'}>
          <RiAccountPinCircleLine size={24} />
        </Link>
      </div>
    </div>

    // </div>
  )
}

import appRoutes from '@/configs/appRoutes'
import Link from 'next/link'
import React from 'react'

export default function Admin({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-[100vh] flex'>
      <div className='h-full min-w-[250px] bg-slate-500 text-white px-3 py-1 flex flex-col'>
        <Link href={appRoutes.home} className={`text-[var(--sub-color-plate)] font-extrabold text-4xl `} >
          فودینو
        </Link>
        <div className='flex flex-col gap-4 pt-5'>
          <Link href={appRoutes.accessManagement} className={`font-sm text-bold hover:text-black `} >
            مدیریت دسترسی ها
          </Link>

        </div>
      </div>

      <div className='h-full w-full'>
        <nav className='h-[60px] bg-slate-500 flex items-center text-md font-bold p-2 text-white w-full'>
          داشبورد
        </nav>
        <div className='w-full'>
          {children}
        </div>
      </div>
    </div>
  )
}

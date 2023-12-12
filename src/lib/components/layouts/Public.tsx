import Footer from '@/components/footer/Index'
import { DesktopHeader } from '@/components/headers'
import React from 'react'

export default function Public({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen'>
      <DesktopHeader />
      <div className=''>
        {children}
      </div>
      <Footer />
    </div>
  )
}

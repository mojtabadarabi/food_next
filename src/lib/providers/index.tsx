import React from 'react'

export default function AppProvider({children}:{children:React.ReactNode}) {
  return (
    <div>
        {children}
    </div>
  )
}

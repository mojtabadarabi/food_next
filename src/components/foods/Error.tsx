import React from 'react'
import { VscError } from "react-icons/vsc";

export default function Error() {
  return (
    <div className='bg-red-500 text-white rounded p-4 text-center flex flex-col gap-4 justify-center items-center'>
        <VscError size={70}/>
        خطایی رخ داده است
    </div>
  )
}

import React from 'react'
import { SlSocialDropbox } from "react-icons/sl";

export default function Empty() {
  return (
    <div className='bg-yellow-400 text-white rounded p-4 text-center flex flex-col gap-4 justify-center items-center'>
        <SlSocialDropbox size={60}/>
        هیچ رستورانی وجود ندارد
    </div>
  )
}

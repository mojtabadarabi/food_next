import LoadingButton from "@/lib/components/LoadingButton"
import { useState } from "react"
import { Dialog } from "@mui/material"
import useCreateAdmin from "./useCreateAdmin"

export default function index({ users }) {
  const {Component} = useCreateAdmin()
  const [open,setOpen] = useState(false)

  console.log(users)
  console.log('users')

  return (
    <div>
      <LoadingButton type="button" onClick={()=>setOpen(true)}>افزودن ادمین</LoadingButton>
      {
        users.length === 0 ? (
          <div className=' bg-slate-200 rounded shadow p-4 flex items-center justify-center m-8'>
            هیچ ادمینی ندارد
          </div>
        ) : <div/>
      }
      <Dialog maxWidth={'sm'} fullWidth open={open} onClose={()=>setOpen(false)}>
        {Component()}
      </Dialog>
    </div>
  )
}

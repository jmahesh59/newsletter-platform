'use client'

import { ICONS } from "@/shared/utils/Icons";
import { useState } from "react"

const Write = () => {
    const [emailTitle , setEmailTitle] = useState("")
    const [open , setOpen] = useState(false);


  return (
    <div className="w-full flex p-5 flex-wrap gap-6 relative">
        <div className="w-[200px] h-[200px] bg-slate-50 flex flex-col items-center justify-center rounded bordrt cursor-pointer"
        onClick={()=>setOpen(!open)}
        >
            <span className="text-2xl block text-center mb-3">{ICONS.plus}</span>
            <h5 className="text-2xl">Create New</h5>
        </div>
      
    </div>
  )
}

export default Write

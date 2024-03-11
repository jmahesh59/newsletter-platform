'use client'

import { ICONS } from "@/shared/utils/Icons";
import { useUser } from "@clerk/nextjs"
import DashboardItems from "./dashboardItems";
import UserPlan from "./userPlan";


function DashboardSidebar() {
  const {user} = useUser();


  return (
    <div className="p-2 ">
       <div className="p-2 flex items-center  bg-[#f5f5f5] rounded">
          <span className="text-2xl">{ICONS.home}</span>
          <h5 className="pl-2 pt-1 capitalize">{user?.username} NewsLetter</h5>
       </div>
       <div className="">
        <DashboardItems/>
        <UserPlan/>
        <DashboardItems bottomContent={true}/>
       </div>
    </div>
  )
}

export default DashboardSidebar

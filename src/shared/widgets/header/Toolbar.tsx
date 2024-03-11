'use client'
import { useUser } from "@clerk/nextjs"
import { Button } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"
function Toolbar() {
  const { user } = useUser()
  return (
    <div className=" flex items-center gap-4 ">
      <Button color="primary" className="text-lg">
        Start Trial
      </Button>
      {
        user ?(
          <>
          <Link href={'/dashboard'}>
            <Image src={user?.imageUrl} alt="" width={40} height={40} className="rounded-full"/>
          </Link>
          </>
        ):(
          <Link href={'/sign-in'}>Login</Link>
        )
      }
    </div>
  )
}

export default Toolbar

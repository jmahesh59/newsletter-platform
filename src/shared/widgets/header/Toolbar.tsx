'use client'
import { Button } from "@nextui-org/react"
import Link from "next/link"
function Toolbar() {
  return (
    <div className=" flex items-center gap-4 ">
      <Button color="primary" className="text-lg">
        Start Trial
      </Button>
      <Link href={'/sign-up'}>
        Login
      </Link>
    </div>
  )
}

export default Toolbar

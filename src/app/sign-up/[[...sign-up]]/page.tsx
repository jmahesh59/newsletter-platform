"use client"
import { SignUp } from "@clerk/nextjs"

function Page() {
  return (
    <div className='w-full flex h-screen items-center justify-center'>
    <SignUp signInUrl="/sign-In"/>
  </div>
  )
}

export default Page

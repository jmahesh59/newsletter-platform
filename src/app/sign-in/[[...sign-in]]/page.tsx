'use client'
import React from 'react'
import { SignIn} from "@clerk/nextjs"


function Page() {
  return (
    <div className='w-full flex h-screen items-center justify-center'>
      <SignIn signUpUrl="/sign-up"/>
    </div>
  )
}

export default Page

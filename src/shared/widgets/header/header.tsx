import React from 'react'
import Link from 'next/link'
import Logo from './logo'
function Header() {
  return (
    <header className='w-full sticky top-0 left-0 z-[999] border-b border-b[#000] px-10 flex items-center justify-between h-[80px] bg-white text-black'>
        <div className="">
            <Link href={'/'}>
                <Logo/>
            </Link>
        </div>
    </header>
  )
}

export default Header

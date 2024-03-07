import { partners } from '@/app/configs/constants'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { Image } from '@nextui-org/image'
function Branding() {
  return (
    <div className='border-t border-b border-[#000] py-10 '>
       <h3 className='uppercase text-xl md:text-2xl text-center  max-w-3xl mx-auto font-[400] z-20 relative'>
        created by the early morning brew team
       </h3>
       <div className="w-full text-center pt-1">
          <h3 className='uppercase bg-[#F091DD] rounded p-2 text-xl md:text-2xl text-center inline-block font-bold '>
            now powering the world&apos;s top newsletters
          </h3>
       </div>
       <Marquee className='max-w-6xl mx-auto flex'>
            {
                partners.map((i:PartnersTypes,index:number)=>(
                    <>
                    <Image src={i.url} key={i.url} width={200} height={200} alt='partener' 
                    className={`md:max-8 w-[150px] h-[150px] mx-3`}
                    />
                    </>
                ))
            }
       </Marquee>
    </div>
  )
}

export default Branding

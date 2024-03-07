import Header from '@/shared/widgets/header/header'
import React from 'react';
import Banner from'./features/banner'
import Branding from '@/modules/home/features/branding'
import Benefits from './features/benefits'
function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Branding/>
      <Benefits/>
    </div>
  )
}

export default Home

import Header from '@/shared/widgets/header/header'
import React from 'react';
import Banner from './elements/banner';
import Branding from './elements/branding';
import Benefits from './elements/benefits';
import FeatureHighlight from './elements/featureHighlight';
import Footer from '@/shared/widgets/footer/footer';
import Pricing from './elements/pricing';
function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Branding/>
      <Benefits/>
      <FeatureHighlight/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default Home

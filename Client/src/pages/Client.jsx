import React from 'react'
import ContactBox from '../components/ContactBox'
import HeroBanner from '../components/HeroBanner'
import { Assets } from '../assets/Asset'

function Client() {
  return (
    <div className='pt-[100px] sm:pt-[120px] dark:bg-darkBg'>
      <HeroBanner Page={'Our Clients'} Image={Assets.OurProductBanner}/>
      <ContactBox/>
    </div>
  )
}

export default Client
import React from 'react'
import ContactBox from '../components/ContactBox'
import HeroBanner from '../components/HeroBanner'
import { Assets } from '../assets/Asset'
import FaqSection from '../components/FaqSection'
import OurProducts from '../components/OurProducts'

function Product() {
  return (
    <div className='pt-[100px] sm:pt-[120px] dark:bg-darkBg'>
      <HeroBanner Page={'Our Products'} Image={Assets.OurProducts}/>
      <OurProducts/>
      <FaqSection/>
      <ContactBox/>
    </div>
  )
}

export default Product
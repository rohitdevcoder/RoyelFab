import React from 'react'
import ContactBox from '../components/ContactBox'
import HeroBanner from '../components/HeroBanner'
import { Assets } from '../assets/Asset'
import FaqSection from '../components/FaqSection'

function About() {
  return (
    <div className='pt-[100px] sm:pt-[120px] dark:bg-darkBg'>
      <HeroBanner  Page={'About Us'} Image={Assets.AboutUsBanner}/>
      <FaqSection/>
      <ContactBox/>
    </div>
  )
}

export default About
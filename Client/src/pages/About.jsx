import React from 'react'
import ContactBox from '../components/ContactBox'
import HeroBanner from '../components/HeroBanner'
import { Assets } from '../assets/Asset'
import FaqSection from '../components/FaqSection'

function About() {
  return (
    <div className='pt-[100px] sm:pt-[120px] dark:bg-darkBg'>
      <HeroBanner  Page={'About Us'} Image={Assets.AboutUsBanner}/>
      {/* About section  */}
      <div className='w-full dark:bg-darkBg'>
        <div className='max-w-[1200px] mx-auto flex pt-[20px] pb-[20px] mt-[20px] px-4 bg-[#E9FDFF] dark:bg-darkBg rounded-lg flex-col lg:flex-row gap-6'>
        <div className='w-full lg:w-[50%] overflow-hidden rounded-2xl'>
          <img src={Assets.About} alt="About-section-image" />
        </div>
        <div className='w-full lg:w-[50%]'>
          <h1 className='text-2xl text-secondary font-bold mb-4'>Welcome to <span className='text-primary dark:text-white'>Royel Fab.</span></h1>
        <p>
        At Royel Fab, we specialize in the manufacturing and export of high-quality hubless cast iron pipes and fittings. Our products are designed to meet the rigorous demands of modern plumbing and drainage systems, ensuring durability, reliability, and ease of installation. With a commitment to excellence and customer satisfaction, we have established ourselves as a trusted name in the industry, serving clients both domestically and internationally.
        
        <br/>
        <br/>
        At Royel Fab, we specialize in the manufacturing and export of high-quality hubless cast iron pipes and fittings. Our products are designed to meet the rigorous demands of modern plumbing and drainage systems, ensuring durability, reliability, and ease of installation. With a commitment to excellence and customer satisfaction, we have established ourselves as a trusted name in the industry, serving clients both domestically and internationally.
        </p>
        </div>
        </div>
      </div>
      {/* About section end */}
      <FaqSection/>
      <ContactBox/>
    </div>
  )
}

export default About
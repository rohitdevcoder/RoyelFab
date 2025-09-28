import React from 'react'
import Hero from '../components/Hero'
import { BsPeopleFill } from "react-icons/bs";
import { Assets } from '../assets/Asset';
import WhyChoose from '../components/WhyChoose';
import OurProducts from '../components/OurProducts';
import OurClient from '../components/OurClient';
import ContactBox from '../components/ContactBox';
import InternationalClient from '../components/InternationalClient';
import FaqSection from '../components/FaqSection';

function Home() {
  const TestimonialItems = [
  {
  icon :<BsPeopleFill/>,
  title: "40+",
  description: "Trusted Client"
  },
  {
  icon :<BsPeopleFill/>,
  title: "40+",
  description: "Trusted Client"
  },
  {
  icon :<BsPeopleFill/>,
  title: "40+",
  description: "Trusted Client"
  },
  {
  icon :<BsPeopleFill/>,
  title: "40+",
  description: "Trusted Client"
  },
]
  return (
   <div className='mt-10 dark:bg-darkBg'>
    <Hero/>

    {/*---------- testimonials section start -------------*/}
    <div className='flex items-center justify-center'>
    <div className='max-w-7xl mx-auto p-5 grid grid-cols-2  sm:grid-cols-4 gap-4 md:gap-10 sm:gap-5 content-center'>
      {/* testimonial box */}
      {TestimonialItems.map((item,index)=>(
     <div key={index} className='p-5 max-w-[150px] flex flex-col gap-3'>
      <div className='text-5xl flex items-center justify-center text-primary dark:text-secondary'>{item.icon}</div>
     <div>
      <h1 className='text-center font-bold text-3xl text-secondary dark:text-white'>{item.title}</h1>
      <h3 className='text-center dark:text-secondary'>{item.description}</h3>
      </div>
     </div>
      ))}
    </div>
    </div>
    {/*---------- testimonials section end -------------*/}
    
    {/* ------Home about start------------- */}
    <div className='w-full bg-[#E9FDFF] dark:bg-darkBg'>
    <div className='max-w-7xl mx-auto p-4 flex flex-col'>
      <h2 className='text-secondary text-center text-2xl font-bold mb-7'>About <span className='text-primary dark:text-white'>Us</span></h2>
      <div className='w-full flex gap-5 flex-col-reverse md:flex-row'>
        <div className='w-full md:w-[60%] p-4 flex flex-col items-start gap-[10px]  sm:gap-[20px]'>
         <h1 className='text-primary dark:text-white text-2xl font-bold'>About Our <span className='text-secondary'>Company</span></h1>
         <p className='dark:text-white text-[14px] md:text-[16px]'>Our stay at Greenwave Resort was an absolute dream! The peaceful surroundings, coupled with the warm hospitality, made our getaway unforgettable. We stayed in a couple room, which was beautifully designed with a cozy ambiance. The staff was always ready to assist, and the food was excellent. We enjoyed exploring the nearby nature trails and relaxing in the serene environment. Highly recommended for couples looking for a romantic escape!</p>
         <p className='dark:text-white text-[14px] md:text-[16px]'>Our stay at Greenwave Resort was an absolute dream! The peaceful surroundings, coupled with the warm hospitality, made our getaway unforgettable. We stayed in a couple room, which was beautifully designed with a cozy ambiance. The staff was always ready to assist, and the food was excellent. We enjoyed exploring the nearby nature trails and relaxing in the serene environment. Highly recommended for couples looking for a romantic escape!</p>
         <button className=' py-[10px] px-[20px]  bg-primary dark:bg-secondary text-white font-medium rounded cursor-pointer'>Know More</button>
        </div>
        <div className='w-full flex items-center justify-center md:w-[40%] p-4'>
          <img className='w-[80%]' src={Assets.HomeAbot} alt="home-about" />
        </div>
      </div>
    </div>
    </div>
    {/* ------Home about end------------- */}
     
     {/* ---------our Product Section-------- */}
      <OurProducts/>
     {/* ---------our Product Section end-------- */}

     <WhyChoose/>
     
    {/* ------------Our Client Start--------------- */}
    <OurClient/>
    {/* ------------Our Client end--------------- */}

  {/* InterNational Client  */}
 <InternationalClient/>
  {/* InterNational Client ------------- */}
  <FaqSection/>

  <ContactBox/>

   </div>
  )
}

export default Home
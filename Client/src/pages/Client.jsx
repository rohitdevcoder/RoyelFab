import React from 'react'
import ContactBox from '../components/ContactBox'
import HeroBanner from '../components/HeroBanner'
import { Assets } from '../assets/Asset'

function Client() {

const Comapny = [
  // {logo:Assets.CompanyLogo},
  {logo:Assets.Aditya}
]
      const Client = [
        {country: "UAE"},
        {country: "Qatar"},
        {country: "Saudi Arabia"},
        {country: "UK"},
        {country: "Germany"},
        {country: "France"},
        {country: "Belgium"},
        {country: "USA"},
        {country: "Canada"},
        {country: "South Africa"},
        {country: "Nigeria"},
        {country: "Kenya"}
    ]

  return (
    <div className='pt-[100px] sm:pt-[120px] dark:bg-darkBg'>
      <HeroBanner Page={'Our Clients'} Image={Assets.OurProductBanner}/>
      
      {/* Our Clients */}
      <div className='w-full dark:bg-darkBg'>
        <div className='max-w-[1200px] mx-auto flex flex-col pt-[40px] pb-[40px]'>
           <h1 className='text-center text-2xl text-secondary font-bold'>Our <span className='text-primary dark:text-white'>Clients</span></h1>
           <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-[20px] p-4'>
            {/* {Comapny.map((item,index) =>(
              <div key={index} className='flex items-center border-2 border-primary dark:border-secondary rounded-2xl overflow-hidden justify-center'>
              <img src={item.logo} alt={`company-logo-${index}`} />
              </div>
            ))} */}

            {Array.from({ length: 13 }).map((_, index) => {
              const item = Comapny[index % Comapny.length]; // Cycle through the Comapny array
              return(
              <div key={index} className='flex items-center border-2 border-primary dark:border-darkBg rounded-2xl overflow-hidden justify-center'>
              <img src={item.logo} alt={`company-logo-${index}`} />
              </div>
              )
              })}
           
           </div>
       </div>
      </div>
      {/* Our Clients */}

      {/* International Clients start */}
         <div>
      <div className='w-full dark:bg-darkBg '>
         <div className='max-w-[1200px] mx-auto flex flex-col pt-[40px] pb-[40px]'>
           <h1 className='text-center text-2xl text-secondary font-bold'>Our <span className='text-primary dark:text-white'>Interbational</span> Client</h1>
           <div className='flex flex-col md:flex-row mt-[20px]'>
             <div className='w-full md:w-[50%]'>
               <div className='p-4 grid grid-cols-2 sm:grid-cols-3 gap-4 content-center'>
                 {Client.map((item,index) =>(
                 <div key={index} className='flex px-4 py-2 rounded-xl items-center justify-center border-3 border-primary dark:border-secondary '>
                     <h3 className='text-primary font-bold text-[1.3rem] dark:text-white'>{item.country}</h3>
                 </div>         
                 ))}
               </div>
             </div>
             <div className='w-full md:w-[50%]'>
               <img className='w-full sm:w-[90%] md:w-[80%]' src={Assets.WorldMap} alt="World-map" />
             </div>
           </div>
         </div>
       </div>
         </div>
      {/* International Clients end */}

      <ContactBox/>
    </div>
  )
}

export default Client
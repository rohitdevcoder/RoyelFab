import React from 'react'
import { Assets } from '../assets/Asset';

function InternationalClient() {

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
    <div>
 <div className='w-full bg-[#E9EDFF] dark:bg-darkBg '>
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
  )
}

export default InternationalClient
import React from 'react'
import { Assets } from '../assets/Asset';

function OurClient() {
  const Images = [
    Assets.ClientImage,
    Assets.ClientImage,
    Assets.ClientImage,
    Assets.ClientImage,
    Assets.ClientImage,
    Assets.ClientImage,
    Assets.ClientImage,
    // Assets.ClientImage,
    // Assets.ClientImage
  ];
  return (
    <div className='flex flex-col pt-[40px] pb-[40px]'>
      <h1 className='text-center text-2xl font-bold text-secondary'>Our <span className='text-primary dark:text-white'>Client</span></h1>
      
      <div className="overflow-hidden whitespace-nowrap mt-4 max-w-[1200px] mx-auto">
      <div className="flex animate-scroll">
        {Images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`carousel-${index}`}
            className="w-[300px] h-[100px] mx-3 object-cover rounded-xl p-2 dark:bg-white"
          />
        ))}
      </div>
    </div>
    </div>
  )
}

export default OurClient
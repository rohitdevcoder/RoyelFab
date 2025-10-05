import React from 'react'
import { useAppContext } from '../context/AppContext'

function Hero() {
  const {navigate} = useAppContext();
  return (
     <div className='w-full p-5 h-[500px] bg-[url(./assets/hero-light-bg.png)] dark:bg-[url(./assets/hero-dark-bg.png)] bg-no-repeat bg-cover bg-center bg-blend-overlay  '>
      {/* <div className='w-full h-[500px] bgImage'> */}
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col  items-start gap-5 max-w-[400px] pt-[150px]'>
          
            <h1 className='text-3xl text-white leading-tight font-bold'>Welcome to Royel Fab. World's No.1 Export Company</h1>
            <button className=' py-[10px] px-[20px]  bg-secondary text-white font-medium rounded cursor-pointer' onClick={()=>{navigate('/contact'),scrollTo(0,0)}}>Request a service</button>
           
        </div>
      </div>
    </div>
  )
}

export default Hero
import React from 'react'
import { Assets } from '../assets/Asset'
import { MdSupportAgent } from "react-icons/md";

function WhyChoose() {
    const ChooseData = [
        {
           icon: <MdSupportAgent />,
           heading : "24/7 Client Support",
           description : "Our dedicated support team is always available to assist you, from planning to check-out."
        },
        {
           icon: <MdSupportAgent />,
           heading : "24/7 Client Support",
           description : "Our dedicated support team is always available to assist you, from planning to check-out."
        },
        {
           icon: <MdSupportAgent />,
           heading : "24/7 Client Support",
           description : "Our dedicated support team is always available to assist you, from planning to check-out."
        },
        {
           icon: <MdSupportAgent />,
           heading : "24/7 Client Support",
           description : "Our dedicated support team is always available to assist you, from planning to check-out."
        }
    ]
  return (
    <div className='w-full bg-[#E6FCFF] dark:bg-darkBg'>
        <div className='max-w-7xl mx-auto p-2 sm:p-4 flex flex-col items-center gap-5'>
        <h1 className='text-secondary text-center text-2xl font-bold'>Why <span className='text-primary dark:text-white'>Choose</span> us</h1>
        <div className='w-full flex gap-5 flex-col md:flex-row'>
            <div className='w-full md:w-[40%] flex items-center justify-center'><img className='w-[80%]' src={Assets.ChooseImg} alt="Why-choose-img" /></div>
            <div className='w-full md:w-[60%] flex flex-col items-start justify-center gap-3 sm:gap-5'>
                <h1 className='text-secondary text-[1.2rem] font-bold'>Choose Us for Your <span className='text-primary dark:text-white'>Perfect Getaway</span></h1>
          
          {ChooseData.map((item,index)=>(
           <div key={index} className='flex items-start gap-3 sm:gap-5'>
                <span className='text-3xl p-4 rounded-full bg-[#D3E7FF] text-primary'>{item.icon}</span>
                <div className='flex flex-col gap-1'>
                    <h3 className='text-primary font-bold text-[1.2rem] dark:text-secondary'>{item.heading}</h3>
                    <p className='dark:text-white'>{item.description}</p>
                </div>
            </div>
          ))}
            

            </div>
        </div>
     </div>
    </div>
  )
}

export default WhyChoose
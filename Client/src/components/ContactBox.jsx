import React from 'react'

function ContactBox() {
  return (
    <div className='w-full p-3'>
        
        <div className='max-w-[1200px] mx-auto flex items-center justify-center mt-[40px] mb-[40px] bg-primary dark:bg-secondary rounded-2xl p-3'>
            <div className='flex flex-col gap-4 max-w-[800px]  pt-[40px] pb-[40px]'>
                <h1 className='text-[20px] font-bold text-center text-white'>Still have Questions? We’re Just a Message Away</h1>
                <p className='text-center text-white'>If you have any query in your mind, contact our expert for assistance</p>
                <div className='flex gap-4 items-center justify-center mt-[30px]'>
                    <button className='px-5 py-3 bg-white text-primary rounded font-semibold cursor-pointer'>Message Now</button>
                    <button className='px-5 py-3 bg-white text-primary rounded font-semibold cursor-pointer'>Call Now</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ContactBox
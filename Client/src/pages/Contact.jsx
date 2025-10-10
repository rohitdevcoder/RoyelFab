import React, { useState } from 'react'
import toast from 'react-hot-toast';
import HeroBanner from '../components/HeroBanner';
import { Assets } from '../assets/Asset';
import { useAppContext } from '../context/AppContext';
// import axios from 'axios';

function Contact() {
  const {axios} = useAppContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMesssage] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async(e) =>{
    e.preventDefault();
    setLoading(true);
    try {
      if(!name || !email || !subject){
        toast.error("Please fill all the fields")
        setLoading(false);
        return;
      }
      const {data} = await axios.post('api/form/submit',{name,email,subject,message})
      if(data?.success){
        toast.success('Form submitted successfully');
    setName('');
    setEmail('');
    setSubject('');
    setMesssage('')
      }else{
        toast.error(data?.message || 'Unable to submit the form');
      }
    } catch (error) {
      toast.error(error.message)
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className='pt-[100px] dark:bg-darkBg'>
      <HeroBanner Page={'Contact Us'} Image={Assets.AboutUsBanner}/>

    <div className='max-w-7xl mx-auto mt-6 pb-10'>
      <div></div>
      <div>
        <form className='flex flex-col gap-4 p-3' onSubmit={onSubmitHandler} onClick={(e)=>e.stopPropagation()}>
          <div className='w-full'>
            <p className='text-primary font-semibold dark:text-white'>Name</p>
            <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Enter Your Name' className='border border-gray-300 outline-secondary py-2 px-4 rounded w-full dark:placeholder:text-gray-100 dark:text-white' required/>
          </div>
          <div className='w-full'>
            <p className='text-primary font-semibold dark:text-white'>Email</p>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Enter Your Email' className='border border-gray-300 outline-secondary py-2 px-4 rounded w-full dark:placeholder:text-gray-100 dark:text-white' required/>
          </div>
          <div className='w-full'>
            <p className='text-primary font-semibold dark:text-white'>Subject</p>
            <input onChange={(e)=>setSubject(e.target.value)} value={subject} type="text" placeholder='Enter Subject of your message' className='border border-gray-300 outline-secondary py-2 px-4 rounded w-full dark:placeholder:text-gray-100 dark:text-white' required/>
          </div>
          <div className='w-full'>
            <p className='text-primary font-semibold dark:text-white'>Message</p>
            <textarea rows={4} onChange={(e)=>setMesssage(e.target.value)} value={message} type="text" placeholder='Enter Your Message' className='border border-gray-300 outline-secondary py-2 px-4 rounded w-full dark:placeholder:text-gray-100 dark:text-white'/>
          </div>
          <button className='py-3 text-[1.2rem] bg-primary hover:bg-secondary text-white dark:text-primary dark:bg-white cursor-pointer rounded max-w-[150px]'>{loading?"Submitting...":"Submit"}</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact
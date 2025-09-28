import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { MdOutlineLocationOn } from "react-icons/md";



function Footer() {
const QuickLinks = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'Products', link: '/product'},
    {name: 'Clients', link: '/client'},
    {name: 'Contact', link: '/contact'}
  ]

const CompanyLinks = [
    {name: 'Refunds Policy', link: '/'},
    
  ]

// const [nevActive,setNavActive] = useState('Home');
const {navActive,setNavActive}=useAppContext();
const currentYear = new Date().getFullYear();
  return (
    <>
    <div className='w-full bg-[#EAEFFF] dark:bg-darkBg p-5'>
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 py-[40px]'>
            <div>
                <div>
                    <h1 className='text-2xl font-bold text-primary dark:text-secondary mb-2'>About Us</h1>
                    <p className='dark:text-white'>Royel Fab. Founded in 2019, we delivers world-class DI castings globally, pioneering sustainable green sand methods with 300 T/month capacity, zero defects, and a strong legacy in infrastructure casting solutions.</p>
                </div>
                <div className='mt-4'>
                    <h1 className='text-2xl font-bold text-primary dark:text-secondary mb-2'>Socials</h1>
                    <ul className='flex gap-3 text-2xl dark:text-white'>
                        <li><a href="#"><ImFacebook2 /></a></li>
                        <li><a href="#"><RiInstagramFill /></a></li>
                        <li><a href="#"><IoLogoYoutube /></a></li>
                    </ul>
                </div>
            </div>

            <div className='ml-1 sm:ml-4 md:ml-10'>
            <h1 className='text-2xl font-bold text-primary dark:text-secondary mb-2'>Quick Links</h1>
            <nav className='list-none mt-5 dark:text-white'>
                {QuickLinks.map((link,index)=>(
                 <li onClick={()=> {scrollTo(0,0),setNavActive(link.name)}} key={index}>
                    <Link className={`${navActive==link.name ? 'text-secondary':''} hover:text-secondary`} to={link.link}>{link.name}</Link>
                </li>
                ))}
               
            </nav>
            </div>

            <div>
            <h1 className='text-2xl font-bold text-primary dark:text-secondary mb-2'>Company</h1>
            <nav className='list-none mt-5 dark:text-white'>
                {CompanyLinks.map((link,index)=>(
                 <li onClick={()=> {scrollTo(0,0),setNavActive(link.name)}} key={index}>
                    <Link className={`${navActive==link.name ? 'text-secondary':''} hover:text-secondary`} to={link.link}>{link.name}</Link>
                </li>
                ))}
               
            </nav>
            </div>
            

            <div>
                <h1 className='text-2xl font-bold text-primary dark:text-secondary mb-2'>Contact Info</h1>
            <div className='mt-5 flex flex-col gap-4'>
                <div className='flex gap-2'>
                    <span className='p-3 rounded-full bg-[#B9C8FF]'> <MdOutlineLocationOn size={28}  className='online text-primary dark:text-secondary'/> </span>
                    <div className='dark:text-white'>
                        <h1 className='text-[18px] font-semibold '>Address:</h1>
                        <p>Kolkata, West Bengal, India</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <span className='p-3 rounded-full bg-[#B9C8FF]'> <MdOutlineLocationOn size={28}  className='online text-primary dark:text-secondary'/> </span>
                    <div className='dark:text-white'>
                        <h1 className='text-[18px] font-semibold '>Address:</h1>
                        <p>Kolkata, West Bengal, India</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <span className='p-3 rounded-full bg-[#B9C8FF]'> <MdOutlineLocationOn size={28}  className='online text-primary dark:text-secondary'/> </span>
                    <div className='dark:text-white'>
                        <h1 className='text-[18px] font-semibold '>Address:</h1>
                        <p>Kolkata, West Bengal, India</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
        <div className='w-full bg-primary py-4 dark:bg-secondary'><h1 className='text-center text-white text-[18px]'>Copyright © {currentYear} -  Royal Fab Pvt. Ltd.</h1></div>
    </>
  )
}

export default Footer
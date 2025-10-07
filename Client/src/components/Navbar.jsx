import React, { useState } from 'react'
// import { Assets } from '../assets/Asset'
import { Link } from 'react-router-dom'
import { MdDarkMode,MdOutlineLightMode } from "react-icons/md";
import { useAppContext } from '../context/AppContext';
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const navMenuItem = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'Products', link: '/product'},
    {name: 'Clients', link: '/client'},
    {name: 'Contact', link: '/contact'}
  ]

  const {theme,ToggleTheme,setShowLogin,navActive,setNavActive,navigate} =useAppContext();
  const [isOpen, setIsopen] = useState(false);
  // const [navActive,setNavActive] = useState('Home');

  const handleMobileMenu = () =>{
    setIsopen(!isOpen);
  }

  return (
    <>
    {/* Mobile Navbar */}
    <div className='w-full h-screen fixed blackOverlay duration-500 z-100 top-0'
    style={{
      visibility : isOpen ? 'visible' : 'hidden',
      opacity : isOpen ? '1' : '0',
      transition: 'all 0.5s ease-in-out'
    }}
    onClick={handleMobileMenu}
    >
      <div className='w-[300px] sm:w-[350px] h-full bg-white dark:bg-darkBg absolute flex flex-col px-7 py-7 gap-10' 
      style={{
        right: isOpen ? '0' : '-100%',
        transition: 'all 0.5s ease-in-out'
      }}
      onClick={(e) => e.stopPropagation()}
      >
      <div>
        <span className='text-2xl dark:text-white' onClick={handleMobileMenu}><RxCross2 /></span>
      </div>
      
       
       <nav className= 'flex flex-col items-left  list-none gap-5 font-semibold mr-auto dark:text-white'>
           {navMenuItem.map((item,index)=>(
           <li key={index} onClick={()=>{scrollTo(0,0),setNavActive(item.name)}}><Link className={`${navActive===item.name? 'text-secondary' : ''}`} onClick={handleMobileMenu} to={item.link}>{item.name}</Link></li>
           ))}
       </nav>

         <div className='flex items-center  flex-col gap-3'>
          <button className=' py-[10px] px-[20px] bg-primary text-white font-medium rounded cursor-pointer' onClick={()=>{navigate('/contact'),scrollTo(0,0),handleMobileMenu()}}>Request a service</button>
          <button onClick={()=>{setShowLogin(true),handleMobileMenu()}} className=' py-[10px] px-[20px] bg-primary text-white font-medium rounded cursor-pointer'>Admin Login</button>
         </div>

      </div>
    </div>

    {/* //Decsktop Navbar */}
    {/* <div className='relative'> */}
    <header className='fixed w-full top-0 left-0 p-3.5 z-50 shadow-xl bg-white dark:bg-darkBg'>
        <div className='max-w-7xl  mx-auto flex ' >
         <div className='flex'>
            <h1 onClick={()=>{navigate('/'),scrollTo(0,0)}} className='text-primary nextScreen dark:text-white text-3xl font-bold cursor-pointer leading-tight'>Royel <span className='text-secondary'>Fab.</span></h1>
         </div>

         <nav className= 'hidden md:flex items-center list-none gap-5 font-semibold ml-auto dark:text-white'>
          {navMenuItem.map((item,index)=>(
           <li key={index} onClick={()=>{scrollTo(0,0),setNavActive(item.name)}}><Link className={`${navActive===item.name? 'text-secondary' : ''}`}  to={item.link}>{item.name}</Link></li>
           ))}
         </nav>
         
         <div className='flex items-center ml-auto gap-4'>
          <span onClick={ToggleTheme} className='text-2xl cursor-pointer dark:text-white'>
           {theme === 'light' ?<MdDarkMode/> : <MdOutlineLightMode/> }
          </span>
          <button className='hidden sm:block py-[10px] px-[15px] md:px-[20px]   bg-primary text-white font-medium rounded cursor-pointer' onClick={()=>{navigate('/contact'),scrollTo(0,0)}}>Request a service</button>
          <button onClick={()=>{setShowLogin(true)}} className=' py-1 px-2 text-sm text-secondary border border-secondary font-medium rounded-4xl cursor-pointer hidden md:block'>Admin</button>
         <span onClick={handleMobileMenu} className='block md:hidden text-2xl dark:text-white cursor-pointer ml-3'>
           <HiMiniBars3CenterLeft />
         </span>
         </div>
        </div>
    </header>
    {/* </div> */}
    </>
  )
}

export default Navbar
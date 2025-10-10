import React from 'react'
import { useAppContext } from '../../context/AppContext'
import { MdDarkMode,MdOutlineLightMode } from "react-icons/md";
import { MdOutlineAddBusiness } from "react-icons/md";
import { IoList } from "react-icons/io5";
import { GrBasket } from "react-icons/gr";
import { NavLink, Outlet } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';


function Adminlayout() {
    const {navigate,theme,ToggleTheme} = useAppContext();
    const AdminManu = [
        {name:"Add Product", link:'/admin',icon:<MdOutlineAddBusiness />},
        {name:"Product List", link:'/admin/product-list',icon:<IoList />},
        {name:"Orders", link:'/admin/order',icon:<GrBasket />}
    ]

    const logout = async () =>{
    try {
      const {data} = await axios.get('/api/admin/logout');
      if(data.success){
         toast.success(data.messsage || 'Logged out successfully');
         navigate('/')
      }else{
         toast.error(data.message || 'Unable to logout');
      }
    } catch (error) {
      toast.error(error.messsage);
    }
    }
  return (
    <>
    {/* NavBar */}
    <div className='py-4 px-3 w-full border-b border-gray-400 dark:bg-darkBg sticky top-0 z-100 bg-white'>
    <div className='max-w-7xl mx-auto flex items-center justify-between'>
         <div className='flex'>
            <h1 onClick={()=>{navigate('/admin'),scrollTo(0,0)}} className='text-primary dark:text-white text-3xl font-bold cursor-pointer leading-tight'>Royel <span className='text-secondary'>Fab.</span></h1>
         </div>
         <div className='flex items-center gap-4'>
             <span onClick={ToggleTheme} className='text-2xl cursor-pointer dark:text-white'>
                {theme === 'light' ?<MdDarkMode/> : <MdOutlineLightMode/> }
             </span>
             <button onClick={logout} className='text-red-600 rounded-4xl border border-red-600 px-3 py-1 cursor-pointer hover:bg-red-100/70'>Logout</button>
         </div>
    </div>
    </div>
    
    {/* Sidebar */}
    <div className='flex dark:bg-darkBg'>
     <div className='w-16 md:w-64 flex flex-col border-r-2 border-secondary h-[95vh] gap-3 dark:bg-darkBg py-10 items-center fixed'>
     {AdminManu.map((item)=>(
        <NavLink to={item.link} key={item.name} end={item.link==='/admin'} 
        className={({isActive})=> `flex items-center gap-3 px-5 py-3 hover:text-secondary text-[1.2rem] font-semibold ${isActive ? 'text-secondary'  : 'text-black dark:text-white'}`}
        >
        <span>{item.icon}</span>
        <p className=' hidden md:block'>{item.name}</p>
        </NavLink>
     ))}
     </div>
     <div className='relative w-full ml-16 md:ml-64'>

     <Outlet/>
     </div>
    </div>
    </>
  )
}

export default Adminlayout
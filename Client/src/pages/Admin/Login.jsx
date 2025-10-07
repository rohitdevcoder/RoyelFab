import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast';

function Login() {
  const {setIsAdmin, setShowLogin,axios, navigate} = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPossword] = useState('');
  const [loading, setLoading] = useState(false);


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simple validation
    if (!email || !password) {
      toast.error('Please fill in all fields');
      setLoading(false);
      return;
    }
  try {
      const {data} = await axios.post('/api/admin/login',{email,password})
      if(data?.success){
        toast.success('Login Successful');
        setIsAdmin(true);
        setShowLogin(false);
        navigate('/admin');
        setLoading(false);
        setEmail('');
        setPossword('');
      }else{
        toast.error('Enter correct admin credentials');
        setLoading(false);
      }

  } catch (error) {
    // toast.error(error.message)
      const errorMessage = error.response?.data?.message || 'An error occurred. Please try again.';
      toast.error(errorMessage);
      // console.error("Login Error:", error);
  }finally {
      // This will run whether the login succeeds or fails
      setLoading(false);
  }
  }
  return (
    <div onClick={()=>setShowLogin(false)} className='fixed top-0 bottom-0 left-0 right-0 flex items-center text-sm  text-gray-600 bg-black/50 z-30'>
      <form onSubmit={handleLogin} onClick={(e)=>e.stopPropagation()} className='flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white dark:bg-darkBg dark:border-gray-700'>
       <div className='w-full flex justify-center'>
       <p className='text-2xl font-semibold text-primary dark:text-white'>Admin <span className='text-secondary'>Login</span></p>
       </div>
         <div className='w-full'>
          <p className='text-primary text-[1.2rem] font-semibold dark:text-white'>Email</p>
          <input type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full rounded outline-primary px-3 py-2 border border-gray-300 dark:placeholder:text-gray-200 dark:text-white dark:outline-secondary' required/>
        </div>

        <div className='w-full'>
        <p className='text-primary text-[1.2rem] font-semibold dark:text-white'>Password</p>
          <input type="password" placeholder='Enter Password' onChange={(e)=>setPossword(e.target.value)} value={password} className='w-full rounded outline-primary px-3 py-2 border border-gray-300 dark:placeholder:text-gray-200 dark:text-white dark:outline-secondary' required/>
           </div>
      <button  className='bg-primary py-3 text-white rounded dark:bg-secondary cursor-pointer w-full font-semibold'> {loading ? 'Signing In...' : 'Sign In'}</button>
      </form>
    </div>
  )
}

export default Login
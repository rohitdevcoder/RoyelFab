import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'

function Login() {
  const {setIsAdmin, setShowLogin, navigate} = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPossword] = useState('');

  const handleLogin = async () => {
    setIsAdmin(true);
    navigate('/admin')
  }
  return (
    <div className='pt-[120px] pb-[100px] flex items-center justify-center dark:bg-darkBg'>
      <div className='w-[400px] p-5 rounded-md border-2 border-primary m-2 dark:border-secondary'>
        <form className='w-full flex flex-col gap-5'>
          <div className='w-full'>
            <p className='text-primary text-[1.2rem] font-semibold dark:text-white'>Email</p>
            <input type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full rounded outline-primary px-3 py-2 border border-gray-300 dark:placeholder:text-gray-200 dark:text-white dark:outline-secondary'/>
          </div>
          <div className='w-full'>
            <p className='text-primary text-[1.2rem] font-semibold dark:text-white'>Password</p>
            <input type="password" placeholder='Enter Password' onChange={(e)=>setPossword(e.target.value)} value={password} className='w-full rounded outline-primary px-3 py-2 border border-gray-300 dark:placeholder:text-gray-200 dark:text-white dark:outline-secondary'/>
          </div>
          <button onSubmit={handleLogin} onClick={(e)=>e.stopPropagation()} className='bg-primary py-3 text-white rounded dark:bg-secondary cursor-pointer'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
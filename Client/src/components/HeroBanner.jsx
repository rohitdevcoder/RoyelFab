import React from 'react'
import { Link } from 'react-router-dom'

function HeroBanner({Page, Image}) {
  return (
    <div className='max-w-7xl mx-auto p-3'>
     <div className="w-full h-[300px] flex items-center justify-center rounded-2xl bg-center bg-cover" style={{backgroundImage:`url(${Image})`}}>
        <div className='flex flex-col items-center gap-3'>
            <h1 className='text-3xl text-white font-bold'>{Page}</h1>
            <span className='text-white'><Link to='/' className='text-amber-200 hover:text-amber-400'>Home</Link> / {Page}</span>
        </div>
     </div>
    </div>
  )
}

export default HeroBanner
import React from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCart from './ProductCart';

function OurProducts() {
  const {products} = useAppContext();
  return (
    <div className='max-w-7xl mx-auto py-[60px] px-3 flex flex-col items-center gap-5'>
      <h1 className='text-secondary text-center text-2xl font-bold'>Our <span className='text-primary dark:text-white'>Products</span></h1>
    <div  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 '>
    {products && products.filter((product)=>product.inStrock).map((item,index)=>(
      <ProductCart key={index} product={item}/>
    ))}
    </div>
    </div>
  )
}

export default OurProducts
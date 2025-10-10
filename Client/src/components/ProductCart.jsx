import React from 'react'
import { useAppContext } from '../context/AppContext'

function ProductCart({product}) {
    const {navigate} = useAppContext();
  return product && (
    <div className='p-3 border-2 border-primary rounded-lg flex flex-col items-center gap-3'>
        <div onClick={()=>{navigate(`/products/${product.category.toLowerCase()}/${product._id}`),scrollTo(0,0)}} className='w-[80%] flex items-center justify-center overflow-hidden'>
            <img className='w-full h-full cursor-pointer rounded' src={product.image[0]} alt={`product_${product.name}`} />
        </div>
        <h3 onClick={()=>{navigate(`/products/${product.category.toLowerCase()}/${product._id}`),scrollTo(0,0)}} className='cursor-pointer text-[1.2rem] text-black hover:text-secondary dark:text-white font-semibold'>{product.name}</h3>
        <button onClick={()=>{navigate(`/products/${product.category.toLowerCase()}/${product._id}`),scrollTo(0,0)}} className='px-5 py-3 rounded bg-primary text-white cursor-pointer dark:bg-secondary'>View Details</button>
    </div>
  )
}

export default ProductCart
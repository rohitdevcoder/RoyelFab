import React from 'react'
// import { Assets } from '../../assets/Asset'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

function ProductList() {
  const {products, axios, fetchProducts} = useAppContext()

  const toggleStock = async (id,inStrock) =>{
    try {
      const {data} = await axios.post('/api/product/stock',{id,inStrock});
      if(data.success){
        fetchProducts();
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='no-scrollbar dark:bg-darkBg w-full overflow-y-scroll p-3 sm:p-5'>
      <div>
        <h1 className='text-2xl font-semibold text-primary dark:text-secondary mb-5'>All Products</h1>
        <div className='border-2 border-gray-300 rounded-2xl px-0 py-6'>
          <table className='md:table-auto table-fixed w-full overflow-hidden'>
            <thead>
              <tr className='text-secondary'>
                 <th className='pb-3 hidden sm:block'>Sl. No.</th>
                <th className='pb-3'>Product</th>
                <th className='pb-3'>Category</th>
                <th className='pb-3'>In Stock</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product,index)=>(
                <tr className='text-center border-t-2 border-gray-300' key={index}>
                  <td className='max-sm:hidden text-2xl font-semibold dark:text-white'>{index+1}</td>
                   <td className='py-3 flex gap-4 items-center justify-center'>
                    <div className='hidden sm:flex rounded border border-gray-300 p-2 gap-3 items-center justify-center w-20 '>
                      <img className='w-18' src={product.image[0]} alt={`product_image_${index}`} />
                    </div>
                      <span className='text-[1.1rem] dark:text-white'>{product.name}</span>
                   </td>
                   <td className='text-[1.1rem] dark:text-white'>{product.category}</td>
                   <td>
                      <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                                    <input onChange={()=>{toggleStock(product._id,!product.inStrock)}} checked={product.inStrock} type="checkbox" className="sr-only peer"/>
                                    <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                                    <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                      </label>
                   </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProductList
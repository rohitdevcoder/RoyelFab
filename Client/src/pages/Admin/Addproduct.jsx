import React, { useState } from 'react'
import { Assets } from '../../assets/Asset';

function Addproduct() {

  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const Categories =  [
    {
    name: "sitting Pipes"
     },
    {
    name: "Manhole Cover"
     },
    {
    name: "Cast Iron Fittings"
     },
    {
    name: "Iron Grilles"
     }
]

const onSubmitHandeler = async (e) =>{
  e.preventDefault();
  setCategory('');
  setDescription('');
  setName('');
  setFiles([]);
}

  return (
    <div className='no-scrollbar flex-1  h-[95vh] overflow-y-scroll flex flex-col justify-between  dark:bg-darkBg'>
      <form onSubmit={onSubmitHandeler} className='max-w-lg md:p-10 p-3 flex flex-col gap-3 '>
        <div>
          <p className='text-base font-semibold dark:text-white'>Product Image</p>
          <div className='flex flex-wrap gap-3 mt-2 items-center'>
            {Array(4).fill('').map((_,index)=>(
              <label key={index} htmlFor={`image-${index}`}>
                <input type="file" 
                onChange={(e)=>{
                  const updateFiles =  [...files];
                  updateFiles[index] = e.target.files[0];
                  setFiles(updateFiles);
                }}
                id={`image-${index}`} hidden
                />
                <img className='max-w-24 cursor-pointer rounded-2xl' src={files[index] ? URL.createObjectURL(files[index]) : Assets.UploadArea} width={100} height={100} alt="UploadArea" />
              </label>
            ))}
          </div>
        </div>
        <div>
          <p className='text-base font-semibold dark:text-white'>Product Name</p>
          <input type="text" placeholder='Enter Product Name' onChange={(e)=>setName(e.target.value)} value={name} className='w-full rounded outline-primary px-3 py-2 mt-2 border border-gray-300 dark:placeholder:text-gray-200 dark:text-white dark:outline-secondary'/>
        </div>
        <div>
          <p className='text-base font-semibold dark:text-white'>Product Description</p>
          <textarea type="text" rows={4} placeholder='Enter Product Description' onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full rounded outline-primary px-3 py-2 mt-2 border border-gray-300 dark:placeholder:text-gray-200 dark:text-white dark:outline-secondary'/>
        </div>
        <div className='w-full flex flex-col gap-3'>
          <label htmlFor="category" className='text-base font-semibold dark:text-white'>
          Category
          </label>
          <select onChange={(e)=>setCategory(e.target.value)} value={category} id="category"  className='w-full rounded outline-primary px-3 py-2 border border-gray-300 dark:placeholder:text-gray-200 dark:text-white dark:bg-darkBg'>
            <option value="">Select Category</option>
            {Categories.map((cate,index)=>(
              <option key={index} value={cate.name}>{cate.name}</option>
            ))}
          </select>
        </div>
        <div className='mt-2'>
          <button className='px-8 py-2 bg-primary text-white font-semibold rounded cursor-pointer hover:bg-secondary'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default Addproduct
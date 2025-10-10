import React, { useState } from 'react'
import { Assets } from '../../assets/Asset';
import toast from 'react-hot-toast';
import { useAppContext } from '../../context/AppContext';

function Addproduct() {
  
  const {axios,fetchProducts} = useAppContext();
  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);



const onSubmitHandler = async (e) => {
  e.preventDefault();
  
  // Start loading state immediately
  setLoading(true);

  try {
    const formData = new FormData();

    // 1. Append product fields individually instead of as a single JSON string.
    formData.append('name', name);
    formData.append('description', description);
    formData.append('category', category);
    // Add any other text fields here

    // 2. Append all files. The field name 'images' must match your backend middleware (e.g., multer).
    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }

    const { data } = await axios.post('/api/product/add', formData, {
      // Optional but good practice: set the Content-Type header for multipart/form-data
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (data.success) {
      toast.success(data.message || 'Product added successfully');
      // Reset form state on success
      setName('');
      setDescription('');
      setCategory('');
      setFiles([]);
     fetchProducts();
    } else {
      // This 'else' block will likely not be hit if the API follows standard HTTP status codes,
      // as Axios will throw an error for non-2xx responses, which is caught by the 'catch' block.
      // It's kept here for safety in case the API returns a 200 OK with a failure message.
      toast.error(data.message || 'Unable to add product');
    }

  } catch (error) {
    // 3. Provide a more specific error message from the server if available.
    const errorMessage = error.response?.data?.message || 'An unexpected error occurred.';
    toast.error(errorMessage);

  } finally {
    // 4. Set loading to false here to ensure it always runs, regardless of success or failure.
    setLoading(false);
  }
};

// const onSubmitHandeler = async (e) =>{
//   try {
//   e.preventDefault();
//   const productData = {
//     name,
//     description,
//     category
//   }
//     setLoading(true);
//  const formData = new FormData();
// formData.append('productData', JSON.stringify(productData));
// for (let i = 0; i < files.length; i++) {
//   formData.append('images',files[i]);
// }
// const {data} = await axios.post('/api/product/add',formData)
// if(data.success){
//   toast.success(data.message || 'Product added successfully');
//   setCategory('');
//   setDescription('');
//   setName('');
//   setLoading(false)
//   setFiles([]);
// }else{
//   toast.error(data.message || 'Unable to add product');
//   setLoading(false)
// }

//   } catch (error) {
//     toast.error(error.message);
//     setLoading(false)
//   }finally{
//     setLoading(false);
//   }
// }

  const Categories =  [
    {
    name: "Fitting Pipes",
    path:"Fitting"
     },
    {
    name: "Manhole Cover",
    path:"Manhole"
     },
    {
    name: "Cast Iron Fittings",
    path:"CastIron"
     },
    {
    name: "Iron Grilles",
    path:"Iron"
     }
]


  return (
    <div className='no-scrollbar flex-1  h-[95vh] overflow-y-scroll flex flex-col justify-between  dark:bg-darkBg'>
      <form onSubmit={onSubmitHandler} className='max-w-lg md:p-10 p-3 flex flex-col gap-3 '>
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
          <input type="text" placeholder='Enter Product Name' onChange={(e)=>setName(e.target.value)} value={name} className='w-full rounded outline-primary px-3 py-2 mt-2 border border-gray-300 dark:placeholder:text-gray-200 dark:text-white dark:outline-secondary' required/>
        </div>
        <div>
          <p className='text-base font-semibold dark:text-white'>Product Description</p>
          <textarea type="text" rows={4} placeholder='Enter Product Description' onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full rounded outline-primary px-3 py-2 mt-2 border border-gray-300 dark:placeholder:text-gray-200 dark:text-white dark:outline-secondary'></textarea>
        </div>
        <div className='w-full flex flex-col gap-3'>
          <label htmlFor="category" className='text-base font-semibold dark:text-white'>
          Category
          </label>
          <select onChange={(e)=>setCategory(e.target.value)} value={category} id="category"  className='w-full rounded outline-primary px-3 py-2 border border-gray-300 dark:placeholder:text-gray-200 dark:text-white dark:bg-darkBg'>
            <option value="">Select Category</option>
            {Categories.map((cate,index)=>(
              <option key={index} value={cate.path}>{cate.name}</option>
            ))}
          </select>
        </div>
        <div className='mt-2'>
          <button className='px-8 py-2 bg-primary text-white font-semibold rounded cursor-pointer hover:bg-secondary'>{loading?"Adding....":"Add"}</button>
        </div>
      </form>
    </div>
  )
}

export default Addproduct
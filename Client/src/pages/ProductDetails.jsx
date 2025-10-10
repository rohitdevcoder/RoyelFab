import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams,Link } from 'react-router-dom';
import ProductCart from '../components/ProductCart';
import { RxCross2 } from "react-icons/rx";
import toast from 'react-hot-toast';


function ProductDetailPage() {
    const {products,navigate,axios} = useAppContext();
    const {id} = useParams();
    const product = products.find((item)=>item._id === id);

    const [thumbnail, setThumbnail] = useState(null);
    const [sideForm,OpenSideForm] = useState(false);
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [relatedProducts, setRelatedProducts] = useState([]);


    // Fetch related products based on category
 const fetchRelatedProducts = () =>{
   if (products.length>0 && product?.category) {
    let relatedItems = products.filter(
  (item) => item.category.toLowerCase() === product.category.toLowerCase() && item._id !== product._id).slice(0, 4);
   setRelatedProducts(relatedItems);
  }
 }

useEffect(() => {
fetchRelatedProducts();
}, [products,product])

    // useEffect(() => {
    //   let productCopy = products.slice();
    //   productCopy =  productCopy.filter((item) => product.category === item.category);
    //   setRelatedProducts(productCopy)
    // }, [products])

    // useEffect(() => {
    //   let productCopy = products.slice();
    //   productCopy =  products.filter((item) => item.category.toLowerCase() === product.category.toLowerCase() && item._id !== product._id);
    //   setRelatedProducts(productCopy)
    // }, [products,product])

    
    useEffect(()=>{
        setThumbnail(product?.image?product.image[0]:null)
    },[product])

    const handleSideForm = () =>{
        OpenSideForm(!sideForm);
    }

    const onSubmitFormHandler = async(e) =>{
        e.preventDefault();
        setLoading(true);
        try {
            if(!name || !email || !phone || !city ){
            toast.error("Please fill all the required fields")
            setLoading(false);
            return;
        }
        const {data} = await axios.post('/api/order/place-order',{
            product_name: product.name,
            name,
            email,
            mobile:phone,
            city,
            message
        })  
        if(data?.success){
            toast.success(data?.message || "Thank you we will contact you soon!")
            setLoading(false);
        OpenSideForm(!sideForm);
        setName('');
        setEmail('');
        setPhone('');
        setCity('');
        setMessage('');
        }else{
            toast.error(data?.message || "Unable to place the order")
            setLoading(false);
        }
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }

        
        // if(!name || !email || !phone || !city ){
        //  toast.error("Please fill all the required fields")
        // }else{
        // OpenSideForm(!sideForm);
        // setName('');
        // setEmail('');
        // setPhone('');
        // setCity('');
        // setMessage('');
        // toast.success("Thank you we will contact you soon!")
        // }
    }

  return product && (
    <>
    <div
    className='w-full h-screen fixed blackOverlay duration-500 z-100 top-0'
    style={{
      visibility : sideForm ? 'visible' : 'hidden',
      opacity : sideForm ? '1' : '0',
      transition: 'all 0.5s ease-in-out'
    }}
    onClick={handleSideForm}
    >
    {/* Side Form  */}
    <div className='w-[350px] sm:w-[400px] h-full bg-white dark:bg-darkBg absolute flex flex-col px-7 py-7 gap-4 right-0'
       style={{
        right: sideForm ? '0' : '-100%',
        transition: 'all 0.5s ease-in-out'
      }}
      onClick={(e) => e.stopPropagation()}
    >
     <span className='text-3xl dark:text-white mb-6'><RxCross2 className='cursor-pointer' onClick={handleSideForm}/></span>
    <form className='flex flex-col gap-4' onSubmit={onSubmitFormHandler} onClick={(e)=>e.stopPropagation()}>
    <div>
        <p className='text-primary text-[1.3rem] font-semibold dark:text-secondary'>Product Name</p>
        <p className='text-[1.1rem] dark:text-white'>{product.name}</p>
    </div>
    <div>
        <p className='text-primary text-[1.3rem] font-semibold dark:text-secondary'>Name</p>
        <input type="text" placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)} value={name} className='w-full mt-1.5 py-2 px-3 border-2 border-gray-300 outline-secondary dark:text-white rounded'/>
    </div>
    <div>
        <p className='text-primary text-[1.3rem] font-semibold dark:text-secondary'>Email</p>
        <input type="email" placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full mt-1.5 py-2 px-3 border-2 border-gray-300 outline-secondary dark:text-white rounded'/>
    </div>
    <div>
        <p className='text-primary text-[1.3rem] font-semibold dark:text-secondary'>Mobile No.</p>
        <input type="number" min={0} placeholder='Enter Your Mobile Number' onChange={(e)=>setPhone(e.target.value)} value={phone} className='w-full mt-1.5 py-2 px-3 border-2 border-gray-300 outline-secondary dark:text-white rounded'/>
    </div>
    <div>
        <p className='text-primary text-[1.3rem] font-semibold dark:text-secondary'>City</p>
        <input type="text" placeholder='Enter Your Name' onChange={(e)=>setCity(e.target.value)} value={city} className='w-full mt-1.5 py-2 px-3 border-2 border-gray-300 outline-secondary dark:text-white rounded'/>
    </div>
    <div>
        <p className='text-primary text-[1.3rem] font-semibold dark:text-secondary'>Message</p>
        <textarea rows={3} type="text" placeholder='Enter Your Message' onChange={(e)=>setMessage(e.target.value)} value={message} className='w-full mt-1.5 py-2 px-3 border-2 border-gray-300 outline-secondary dark:text-white rounded'/>
    </div>
    <button className='py-3 bg-primary mt-5 rounded text-white cursor-pointer'>{loading?"Submitting...":"Submit"}</button>
    </form>
    </div>
    </div>


    <div className=' dark:bg-darkBg pt-[100px] sm:pt-[120px]'>
        <div className='max-w-7xl mx-auto'>
            <span className='p-3 text-secondary dark:text-yellow-200 '>
                <Link to={'/'} className='text-primary hover:text-secondary cursor-pointer dark:text-white'>Home</Link> / <Link className='text-primary hover:text-secondary cursor-pointer dark:text-white' to={'/product'}>Products</Link> / {product.name}
            </span>
        <div className='flex flex-col md:flex-row gap-10 justify-center items-center'>
            <div className='flex gap-3 p-3'>
            <div className='flex flex-col gap-2'>
            {product.image.map((item,index)=>(
                <div key ={index} onClick={()=>setThumbnail(item)} className='overflow-hidden max-w-24 border-1 border-gray-400 rounded'>
                 <img src={item} alt={`product_${index+1}`} />
                </div>
            ))}
            </div>
            <div className='max-w-100 border-1 border-gray-400 rounded overflow-hidden'>
                <img src={thumbnail} alt="Product_Thumbnail" />
            </div>
            </div>
            {/* Product Description  */}
            <div className='p-3 flex flex-col gap-3 sm:gap-6'>
                <h1 className='text-2xl sm:text-3xl font-semibold text-primary dark:text-secondary'>{product.name}</h1>
                <p className='max-w-[500px] text-gray-500 dark:text-white'>{product.description}</p>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <button className='bg-primary text-white rounded cursor-pointer py-3 px-5'>Order Via Whatsapp</button>
                    <button className='bg-secondary text-white rounded cursor-pointer py-3 px-5' onClick={handleSideForm}>Order Now</button>
                </div>
            </div>
        </div>

        {/* Related Products  */}
        <div className='py-[60px]'>
         <h1 className='text-2xl sm:text-3xl font-semibold text-primary dark:text-secondary'>Related Products</h1>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-5'>
          {relatedProducts && relatedProducts.filter((item)=>item.inStrock).map((item,index)=>(
            <ProductCart key={index} product={item}/>
          ))}
         </div>
         <div className='flex justify-center mt-6'>
         <button className='bg-primary text-white rounded cursor-pointer py-3 px-8 text-center'>View All</button>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetailPage
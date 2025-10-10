import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"
// import { ProductDetails } from "../assets/Asset";
import axios from "axios";
import { toast } from "react-hot-toast";


export const AppContext = createContext();
axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContextProvider = ({children})=>{
  const [theme,setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [navActive,setNavActive] = useState('Home');
  const navigate = useNavigate();
  const [products,setProducts] = useState([])
  const [isAdmin,setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false)
  const [orders, setOrders] = useState([]);


  const fetchAdmin = async ()=>{
    try {
      const {data} = await axios.get('/api/admin/is-auth',{withCredentials:true});
      if(data.success){
        setIsAdmin(true);
      }else{
        setIsAdmin(false)
      }
    } catch (error) {
      // console.error("Admin check failed:", error.response?.data || error.message);
      setIsAdmin(false);
    }
  }


  const fetchProducts = async() =>{
    try {
      const {data} = await axios.get('/api/product/list')
      if(data.success){
        setProducts(data.products)
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const fetchOrders =  async () =>{
    try {
      const {data} = await axios.get('api/order/get-orders');
      if(data.success){
        setOrders(data.orderDatas);
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    const root = window.document.documentElement;
    root.classList.remove('light' , 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  },[theme])

  const ToggleTheme = ()=>{
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }


  useEffect(()=>{
    fetchProducts();
    // fetchAdmin();
    fetchOrders();
  },[])

  useEffect(()=>{
    if(!isAdmin){
     fetchAdmin();
   }
  },[isAdmin])

  const value ={
       theme,
       ToggleTheme,
       navActive,
       setNavActive,
       navigate,
       fetchProducts,
       products,
       isAdmin,
       setIsAdmin,
       showLogin,
       setShowLogin,
       axios,
       orders,
       fetchOrders
  }

  //App context provider
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = ()=>{
    return useContext(AppContext);
}
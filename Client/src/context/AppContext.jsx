import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"
import { ProductDetails } from "../assets/Asset";
import axios from "axios";


axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
export const AppContext = createContext();

export const AppContextProvider = ({children})=>{
  const [theme,setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [navActive,setNavActive] = useState('Home');
  const navigate = useNavigate();
  const [products,setProducts] = useState([])
  const [isAdmin,setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false)


  const fetchAdmin = async ()=>{
    try {
      const {data} = await axios.get('/api/admin/is-auth');
      if(data.success){
        setIsAdmin(true);
      }else{
        setIsAdmin(false)
      }
    } catch (error) {
      setIsAdmin(false);
    }
  }


  const fetchProducts = async() =>{
    setProducts(ProductDetails);
  }
  useEffect(()=>{
    const root = window.document.documentElement;
    root.classList.remove('light' , 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  },[theme])

  useEffect(()=>{
    fetchProducts();
  })
  const ToggleTheme = ()=>{
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  useEffect(()=>{
    fetchAdmin();
  })

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
       axios
  }

  //App context provider
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = ()=>{
    return useContext(AppContext);
}
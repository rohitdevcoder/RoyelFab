import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"
import { ProductDetails } from "../assets/Asset";

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{
  const [theme,setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [navActive,setNavActive] = useState('Home');
  const navigate = useNavigate();
  const [products,setProducts] = useState([])
  const [isAdmin,setIsAdmin] = useState(true);
  const [showLogin, setShowLogin] = useState(false)


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
       setShowLogin
  }

  //App context provider
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = ()=>{
    return useContext(AppContext);
}
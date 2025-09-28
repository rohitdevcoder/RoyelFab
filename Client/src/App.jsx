import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Product from './pages/Product'
import Client from './pages/Client'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import ProductDetailPage from './pages/ProductDetails'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'
import Login from './pages/Admin/Login'
import Adminlayout from './pages/Admin/Adminlayout'
import Addproduct from './pages/Admin/Addproduct'
import ProductList from './pages/Admin/ProductList'
import Order from './pages/Admin/Order'


function App() {
  const isAdminPath = useLocation().pathname.includes('admin')
  const {isAdmin,showLogin} = useAppContext();
  return (
    <>
    {isAdminPath ? null : <Navbar/>}
    {showLogin ?<Login/> : null}
    <Toaster/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/client' element={<Client/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/products/:category/:id' element={<ProductDetailPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin' element={isAdmin ? <Adminlayout/> : <Home/>}>
      <Route index element={isAdmin ?<Addproduct/>:null}/>
      <Route path='product-list' element={<ProductList/>}/>
      <Route path='order' element={<Order/>}/>
      </Route>
    </Routes>
    {!isAdminPath && <Footer/>}
    </>
  )
}

export default App
import React from 'react'
import SigninForm from './pages/Signin/SigninForm';
import SignupForm from './pages/Signup/SignupForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Plan from './pages/Plan/Plan';
import Home from './pages/Home/Home';
import Products from './pages/Products/Product';
import NewProduct from './pages/NewProduct/NewProduct';



const app = () => {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/login" element={<SigninForm />} />
      <Route path="/register" element={<SignupForm />} />
      <Route path="/plan" element={<Plan/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/NewProduct" element={<NewProduct/>} />


      
    </Routes>
  </BrowserRouter>


  )
}

export default app
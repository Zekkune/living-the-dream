import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Categories from './Components/Categories'
import SurpriseMe from './Components/SurpriseMe'
import Enchanted from './Components/Enchanted'


  export default function App() {
  
  return (
    <>
    <Header />
    <Routes>
      <Route path= '/' element={<Home />}/>
      <Route path= '/Categories' element={<Categories/>}/>
      <Route path= '/SurpriseMe' element={<SurpriseMe/>}/>
      <Route path= '/listings/:categoryId' element={<Enchanted/>}/>
    </Routes>
    <Footer />
    </>
  )
}

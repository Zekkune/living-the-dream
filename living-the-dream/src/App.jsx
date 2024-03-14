import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Header from './Components/Header'
import TeamDream from './Components/TeamDream'
import Categories from './Components/Categories'
import SurpriseMe from './Components/SurpriseMe'
import MostPopular from './Components/MostPopular'
// import SearchBar from './Components/SearchBar'
import Enchanted from './Components/Enchanted'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path= '/' element={<Home />}/>
      <Route path= '/Categories' element={<Categories/>}/>
      <Route path= '/TeamDream' element={<TeamDream />}/>
      <Route path= '/SurpriseMe' element={<SurpriseMe/>}/>
      <Route path= '/MostPopular' element={<MostPopular/>}/>
      <Route path= '/listings/:categoryId' element={<Enchanted/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
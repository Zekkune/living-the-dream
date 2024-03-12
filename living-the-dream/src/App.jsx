import { useState } from 'react'
import { Route , Routes } from 'react-router-dom'

import './App.css'
import Header from './Components/Header'
//import Home from './Components/Home'
import Categories from './Components/Categories'
import TeamDream from './Components/TeamDream'
import SurpriseMe from './Components/SurpriseMe'
import MostPopular from './Components/MostPopular'
// import Footer from './Components/Footer'


const App = () => {
  return (
    
    <div className= "app">
    <Header />
    <Routes>
      {/* <Route path= '/' element={<Home />}/> */}
      <Route path= '/Categories' element={<Categories/>}/>
      <Route path= '/TeamDream' element={<TeamDream />}/>
      <Route path= '/SurpriseMe' element={<SurpriseMe/>}/>
      <Route path= '/MostPopular' element={<MostPopular/>}/>
    </Routes>
    {/* <Footer /> */}
  </div>
  )
}

export default App
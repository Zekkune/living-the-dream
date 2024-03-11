import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import { Route , Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'

const App = () => {
  return (
    <div>
      <HomePage />
      <Footer />
    </div>
    <>
    <Header />
    <Routes>
      <Route path= '/' element={<Home />}/>
      <Route path= '/Categories' element={<Categories/>}/>
      <Route path= '/TeamDream' element={<TeamDream />}/>
      <Route path= '/SurpriseMer' element={<SurpriseMe/>}/>
      <Route path= '/MostPopular' element={<MostPopular/>}/>
    </Routes>
    </>
  )
}

export default App
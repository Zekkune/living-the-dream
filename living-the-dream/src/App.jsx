import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Categories from './Components/Categories'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { Route , Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path= '/' element={<Home />}/>
      <Route path= '/Categories' element={<Categories/>}/>
      <Route path= '/TeamDream' element={<TeamDream />}/>
      <Route path= '/SurpriseMer' element={<SurpriseMe/>}/>
      <Route path= '/MostPopular' element={<MostPopular/>}/>
    </Routes>
    <Home />
    <Footer />
    </>
  )
}

export default App
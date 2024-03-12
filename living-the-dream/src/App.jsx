import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Categories from './Components/Categories'
import DisneyCategory from './Components/DisneyCategory'
import MarvelCategory from './Components/MarvelCategory'
import LotrCategory from './Components/LotrCategory'
import HorrorCategory from './Components/HorrorCategory'
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
      <Route path="/" exact component={Categories} />
      <Route path="/categories/disney" component={DisneyCategory} />
      <Route path="/categories/marvel" component={MarvelCategory} />
      <Route path="/categories/lotr" component={LotrCategory} />
      <Route path="/categories/horror" component={HorrorCategory} />
    </Routes>
    <Home />
    <Footer />
    </>
  )
}

export default App
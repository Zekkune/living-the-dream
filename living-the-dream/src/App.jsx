import { useState } from 'react'
import { Route , Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'


function App() {
  const [count, setCount] = useState(0)

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
    </>
  )
}

export default App

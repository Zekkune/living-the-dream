import { useState , useEffect } from 'react'
import { Route , Routes } from 'react-router-dom'

import Header from './Components/Header'
import Home from './Components/Home'
import Categories from './Components/Categories'
import TeamDream from './Components/TeamDream'
import SurpriseMe from './Components/SurpriseMe'
import MostPopular from './Components/MostPopular'
import Footer from './Components/Footer'

import './App.css'
import axios from 'axios'

const BASE_URL = 'mongodb://127.0.0.1:27017/dreamDatabase'


  export default function App() {
    // const [post, setPost] = useState(null);
  
    // useEffect(() => {
    //   axios.get(baseURL).then((response) => {
    //     setPost(response.data);
    //   });
    // }, []);
  
    // if (!post) return null;
  
  return (
    <>
    <Header />
    <Routes>
      <Route path= '/' element={<Home />}/>
      <Route path= '/Categories' element={<Categories/>}/>
      <Route path= '/TeamDream' element={<TeamDream />}/>
      <Route path= '/SurpriseMe' element={<SurpriseMe/>}/>
      <Route path= '/MostPopular' element={<MostPopular/>}/>
      <Route path="/" exact component={Categories} />
      {/* <Route path="/categories/disney" component={DisneyCategory} />
      <Route path="/categories/marvel" component={MarvelCategory} />
      <Route path="/categories/lotr" component={LotrCategory} />
      <Route path="/categories/horror" component={HorrorCategory} /> */}
    </Routes>
    <Footer />
    </>
  )
}

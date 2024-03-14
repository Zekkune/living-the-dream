import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Categories from './Components/Categories'
import SurpriseMe from './Components/SurpriseMe'
// import SearchBar from './Components/SearchBar'
import Enchanted from './Components/Enchanted'


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
      <Route path= '/SurpriseMe' element={<SurpriseMe/>}/>
      <Route path= '/listings/:categoryId' element={<Enchanted/>}/>
    </Routes>
    <Footer />
    </>
  )
}

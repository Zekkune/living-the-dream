import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../global'
import { useNavigate, useParams } from 'react-router-dom'

function Categories() {
  // const [selectedValue, setSelectedValue] = useState()
  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value)
  // }

  const [disneyListings, setDisneyListings]= useState([])
  const [marvelListings, setMarvelListings]= useState([])
  const [lotrListings, setLotrListings]= useState([])
  const [horrorListings, setHorrorListings]= useState([])
  return (
    <div>
      <h2>Categories</h2>
      <h3><Link to='/listings/65f0f0d919b654825ff31c38'>Disney List</Link></h3>
      <h3><Link to='/listings/65f0f0d919b654825ff31c39'>Marvel List</Link></h3>
      <h3><Link to='/listings/65f0f0d919b654825ff31c3b'>LOTR List</Link></h3>
      <h3><Link to='/listings/65f0f0d919b654825ff31c3a'>Horror List</Link></h3>
    </div>
  )
}


// function fetchCategories() {
//   const apiUrl = 

//   return axios.get(apiUrl)
//     .then(response => {
//       return response.data
//     })
//     .catch(error => {
//       console.error('Error fetching categories:', error)
//       throw error;
//     });
// }

export default Categories

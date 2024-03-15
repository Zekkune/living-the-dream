import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../global'
import { useNavigate, useParams } from 'react-router-dom'

function Categories() {
 
  const [disneyListings, setDisneyListings]= useState([])
  const [marvelListings, setMarvelListings]= useState([])
  const [lotrListings, setLotrListings]= useState([])
  const [horrorListings, setHorrorListings]= useState([])
  return (
    <div className= 'categories'>
      <h2>Categories</h2>
      <h3><Link to='/listings/65f0f0d919b654825ff31c38'>Disney Listings</Link></h3>
      <h3><Link to='/listings/65f0f0d919b654825ff31c39'>Marvel Listings</Link></h3>
      <h3><Link to='/listings/65f0f0d919b654825ff31c3b'>LOTR Listings</Link></h3>
      <h3><Link to='/listings/65f0f0d919b654825ff31c3a'>Horror Listing</Link></h3>
    </div>
  )
}

export default Categories

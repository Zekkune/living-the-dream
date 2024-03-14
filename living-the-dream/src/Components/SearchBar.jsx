import { useState } from "react"
import axios from 'axios'
import { BASE_URL } from "../global";
export default function SearchBar (props) {
const [searchInput, setSearchInput] = useState ("")
const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
  // console.log(searchInput)
 };
 const handleSearch = async (e) => {
  e.preventDefault();
  console.log(e.target.searchInput.value)
   const response = await axios.get(`${BASE_URL}/listings/${e.target.searchInput.value}`)
   console.log(response.data)
 };
  return (
    <div className= "searchBar">
      <form onSubmit={handleSearch}>
      <input type= "text" placeholder="Be Enchanted!" id='searchBar' onChange={handleChange} name='searchInput' value={searchInput}></input>
      </form>
    
    </div>
  )
}
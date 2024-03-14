import { useState } from "react"
import axios from 'axios'


export default function SearchBar (props) {

const [searchInput, setSearchInput] = useState ("")

const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
      axios.get('mongodb://127.0.0.1:27017/dreamDatabase').then((response) => {
        props.setapiResponse(response.data);
      });
  };
  

    return (
        <div className= "searchBar"> 
        
        <input type= "text" placeholder="Search Here" id='searchBar' onChange={handleChange} value={searchInput}></input>
        <button onClick={handleSearch}>Search Here</button>

        </div>



    )
}
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

        <h4>Type here</h4>
        <input type= "text" placeholder="Search Here"></input>
        {/* <input type= "text" placeholder="Search Here" onChange={handleChange} value={searchInput}></input> */}

        </div>



    )
}
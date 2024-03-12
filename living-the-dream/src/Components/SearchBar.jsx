import { useState } from "react"

export default function SearchBar () {

    // const [searchInput, setSearchInput] = useState ("")


    return (
        <div className= "searchBar"> 
        
        <input type= "text" placeholder="Search Here" id='searchBar'></input>
        {/* <input type= "text" placeholder="Search Here" onChange={handleChange} value={searchInput}></input> */}

        </div>



    )
}
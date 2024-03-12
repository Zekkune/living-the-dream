import { useState } from "react"

export default function SearchBar () {

    // const [searchInput, setSearchInput] = useState ("")


    return (
        <div className= "searchBar"> 

        <h4>Type here</h4>
        <input type= "text" placeholder="Search Here"></input>
        {/* <input type= "text" placeholder="Search Here" onChange={handleChange} value={searchInput}></input> */}

        </div>



    )
}
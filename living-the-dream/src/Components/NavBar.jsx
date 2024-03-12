import { Link } from 'react-router-dom'
import { useState } from 'react'
 
function NavBar () {

       
  const setDropDown = () => { 
    const [dropdown, setDropdown] = useState(false); 
  }; 
 
    return (
        <div className= 'NavBar'>
          <img src="Backgrounds.png" id= "logo"></img>
          <Link to= "/">Living The Dream </Link>
          <Link to= "/Categories"> Categories </Link>
          <Link to= "/TeamDream">Team's Fav</Link>
          <Link to= "/SurpriseMe">Surprise Me</Link>
          <Link to ="/MostPopular">Most Popular</Link>

        </div>
    )
}

export default NavBar
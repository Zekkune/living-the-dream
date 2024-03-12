import { Link } from 'react-router-dom'
 
function NavBar () {


    return (
        <div className= 'NavBar'>
          <img src="Backgrounds.png" id= "logo"></img>
          <Link to= "/" id= "navItem1">Living The Dream </Link>
          <Link to= "/Categories" id= "navItem"> Categories </Link>
          <Link to= "/TeamDream" id= "navItem">Team's Fav</Link>
          <Link to= "/SurpriseMe" id= "navItem">Surprise Me</Link>
          <Link to ="/MostPopular" id= "navItem">Most Popular</Link>

        </div>
    )
}

export default NavBar
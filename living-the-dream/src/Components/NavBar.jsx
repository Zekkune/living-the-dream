import { Link } from 'react-router-dom'

function NavBar () {
    return (
        <div className= 'NavBar'>
          <img src="images/Backgrounds.svg" id= "logo"></img>
          <Link to= "/">Living The Dream</Link>
          <Link to= "/Categories">Categories</Link>
          <Link to= "/TeamDream">Team's Fav</Link>
          <Link to= "/SurpriseMe">Surprise Me</Link>
          <Link to ="/MostPopular">Most Popular</Link>

        </div>
    )
}

export default NavBar
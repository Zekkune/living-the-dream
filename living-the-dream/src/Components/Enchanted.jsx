import { useEffect, useState } from "react"
import { BASE_URL } from "../global"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

export default function Enchanted () {
  

    let {categoryId} = useParams()
    const [listings, setListings] = useState([])
    useEffect(()=> {
        const getListings = async ()=> {
            try {
                const response = await axios.get(`http://localhost:3000/listings/${categoryId}`)
                console.log(response.data)
                setListings(response.data)
               console.log(listings) 
            } catch (e) {
                console.error("error fetching", e)
            }
        }
        getListings()
        console.log(listings)
    }, [categoryId])
    return (
        <div className="enchanted">
            {listings.map((listing)=> {
                return (
                    <div>
                    <h1>{listing.title}</h1>
                    <img src={listing.picture} alt="img" />
                    <h1>Rating: {listing.rating}</h1>

                    </div>
                )
                
            })}
        </div>
    )} 
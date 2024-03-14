import { useEffect, useState } from "react"
import { BASE_URL } from "../global"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

export default function Enchanted () {
    const [listings, setListings]= useState([])


    useEffect(()=> {
        const getListings= async ()=> {
            try {
                const response = await axios.get(`http://localhost:3000/listings`)
                console.log(response)
                setListings(response.data)
            } catch (e) {
                console.error("error fetching", e)
            }
            
        }
        getListings()
        console.log(listings)
    }, [])
    return (
        <h3>Enchanted</h3>
    )
} 
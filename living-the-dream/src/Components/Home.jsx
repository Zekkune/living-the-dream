import React from 'react'
import { useState } from 'react'
import SearchBar from './SearchBar'

const Home = () => {
const [apiResponse , setapiResponse] = useState()

console.log(apiResponse)

  return (
    <div>
      <SearchBar setapiResponse={setapiResponse} />  
      <h1>Welcome to Living the Dream!</h1>
      <p>Welcome to "Living the Dream" - where fantasy meets reality in the most enchanting way! Step into a realm of magical rentals that will make all your dreams come true! Whether you're seeking a majestic castle, a cozy hobbit hole, or a whimsical treehouse, we've got you covered! Get ready to embark on a fantastical journey filled with wonder and charm. Your dream getaway awaits, so let's make your imagination come to life!</p>
    </div>
  )
}

export default Home
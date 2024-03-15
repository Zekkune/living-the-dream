import { useState } from 'react'
import React from 'react'
import SearchBar from './SearchBar'

const Home = () => {

  return (
    <div className= 'home'>
      <SearchBar />  
      <h1>Welcome to Living the Dream!</h1>
      <p> Where fantasy meets reality in the most enchanting way! <br/> Step into a realm of magical rentals that will make all your dreams come true! <br/> Whether you're seeking a majestic castle, a cozy hobbit hole, or a whimsical treehouse, we've got you covered! <br/> Get ready to embark on a fantastical journey filled with wonder and charm. <br/>Your dream getaway awaits, so let's make your imagination come to life!</p>
    </div>
  )
}

export default Home
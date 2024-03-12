import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Categories() {
  const [selectedValue, setSelectedValue] = useState(option1)
  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }
  return (
    <div>
      <h2>Categories</h2>
      <select value={selectedValue} onChange={handleChange}> 
      <option value="Option 1">Disney</option> 
      <option value="Option 2">Marvel</option> 
      <option value="Option 3">Lord of The Rings</option> 
      <option value="Option 4">Horror</option>
      </select>
    </div>
  )
}

export default Categories
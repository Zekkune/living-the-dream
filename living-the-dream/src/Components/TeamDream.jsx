import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../global'

function TeamDream() {
  const { TeamDream } = require('../models')

  const getTeamDream = async (req, res) => {
    try {
      const teamdream = await TeamDream.find
      res.json(categories)
    } catch (error) {
      return res.status(500).send("An error has occured")
    }
  }

  const getCategoriesById = async (req, res) => {
    try {
      const categories = await axios.get(`${BASE_URL}/categories/:id`)
      if (categories) {
        res.json(categories)
      }
    } catch (error) {
      return res.status(500).send('Categories with the specified ID does not exist')
    }
  }
  return (
    <div>
      <h2>Team's Dreams</h2>
    </div>
  )
}

export default TeamDream

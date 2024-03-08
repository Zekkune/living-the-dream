const { urlencoded } = require('express')
const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Listing = new Schema(
{

},
{timestamps: true} )

module.exports = mongoose.model('Listing', Listing)
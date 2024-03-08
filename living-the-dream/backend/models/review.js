const { urlencoded } = require('express')
const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Review = new Schema(
{

},
{timestamps: true} )

module.exports = mongoose.model('Review', Review)
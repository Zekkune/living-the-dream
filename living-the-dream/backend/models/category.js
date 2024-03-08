const { urlencoded } = require('express')
const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Category = new Schema(
{

},
{timestamps: true} )

module.exports = mongoose.model('Category', Category)
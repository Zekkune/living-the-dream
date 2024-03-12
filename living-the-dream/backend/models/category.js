const { urlencoded } = require('express')
const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Listing = require('./listing') 

const Category = new Schema(
{
    name : {type: String, required: true},
    listing : {type: mongoose.Schema.Types.ObjectId, required: true, ref: './listing'}
},
{timestamps: true} )

module.exports = mongoose.model('Category', Category)
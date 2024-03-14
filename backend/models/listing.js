const { urlencoded } = require('express')
const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Review = require('./review.js')
const Category = require('./category.js')

const Listing = new Schema(
{
    listing_id : {type: String, required: true},
    title : {type: String, required: true},
    description : {type: String, required: true},
    rating : {type : Number, required: true},
    picture : {type : String, required: true},
    category : {type : mongoose.Schema.Types.ObjectId, required: true, ref: 'Category'}     

},
{timestamps: true} )

module.exports = mongoose.model('Listing', Listing)
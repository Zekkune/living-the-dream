const { urlencoded } = require('express')
const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Listing = new Schema(
{
    listing_id : {type: mongoose.Schema.Types.ObjectId},
    title : {type: String, required: true},
    description : {type: String, required: true},
    rating : {type : Number, required: true},
    img : {type : String, required: true}       

},
{timestamps: true} )

module.exports = mongoose.model('Listing', Listing)
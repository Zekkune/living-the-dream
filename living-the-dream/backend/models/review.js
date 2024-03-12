const { urlencoded } = require('express')
const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Review = new Schema(
{
    user : {type: String, required: true},
    review : {type : String, required: true},
    rating : {type : Number, required: true}
},
{timestamps: true} )

module.exports = mongoose.model('Review', Review)
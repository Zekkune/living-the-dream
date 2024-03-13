const db = require('../db')
const  Category = require('../models/category')
const Listing = require('../models/listing')
const { ObjectId } = require('mongoose').Types
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
// const disneyListings = Listing.find({category: ObjectId('65f0ebb07dcdaa6a36cf270d') })

const main = async () => {
    try {
        console.log(Category)
        
        
        
        

        // Create categories
        const categories = [
            { name: 'Disney'},
            { name: 'Marvel'},
            { name: 'Horror'},
            { name: 'Lord of Rings'}
        ];

        await 

        await Category.insertMany(categories)

        console.log('Categories created successfully');
    } catch (error) {
        console.error('Error creating categories:', error);
    } finally {
        db.close();
    }
};

main();

const db = require('../db');
const { Review, Listing } = require('../models');
const Chance = require('chance');
const chance = new Chance();

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    try {
        

        console.log('Listings seeded successfully');
    } catch (error) {
        console.error('Error seeding listings:', error);
    } finally {
        db.close();
    }
};



    
    main();
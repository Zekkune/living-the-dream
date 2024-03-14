const db = require('../db');
const Review  = require('../models/review')
const Listing  = require('../models/listing')
const Chance = require('chance');
const chance = new Chance();

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const main = async () => {
    try {
        
        
        await createReviews()
        console.log('Listings seeded successfully');
    } catch (error) {
        console.error('Error seeding listings:', error);
    } finally {
        db.close();
    }
};

const createReviews = async () => {
    const listings = await Listing.find({}); // Assuming Listing is the name of your model
    const randomRating = () => Math.floor(Math.random() * 5) + 1; // Random rating generator

    for (const listing of listings) {
        await Review.create({
            user: chance.name( {nationality: 'en'} ),
            review: chance.paragraph(),
            rating: randomRating(),
            listing: listing.listing_id // Assuming listing_id is the unique identifier for listings
        });
    }

    
}

main()



    


    
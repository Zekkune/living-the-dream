const db = require('../db');
const { Category, Listing, Review } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    try {
        // Create categories
        const category1 = await Category.create({ name: 'Disney' });
        const category2 = await Category.create({ name: 'Marval' });
        const category3 = await Category.create({ name: 'Horror' });
        const category4 = await Category.create({ name: 'Lord of Rings' });

        // Create listings for category 1 <disney>
        const listing1 = await Listing.create({
            listing_id: '001',
            title: 'Listing 1',
            description: 'Description of listing 1',
            rating: 4.5,
            picture: 'listing1.jpg',
            category: category1._id 
        });
        
        // Create lisings for category 2 <marval>
        const listing2 = await Listing.create({
            listing_id: '002',
            title: 'Listing 2',
            description: 'Description of listing 2',
            rating: 3.8,
            picture: 'listing2.jpg',
            category: category2._id 
        });
        

        //Create lisings for category 3 <horror>
        const listing3 = await Listing.create({
            listing_id: '003',
            title: 'Listing 3',
            description: 'Description of listing 3',
            rating: 4.5,
            picture: 'listing3.jpg',
            category: category3._id 
        });
        
        //Create listing for category 4 <lord of rings>
        const listing4 = await Listing.create({
            listing_id: '004',
            title: 'Listing 4',
            description: 'Description of listing 4',
            rating: 4.8,
            picture: 'listing4.jpg',
            category: category4._id 
        });

        // Create reviews for listing 1
        await Review.create({
            userName: 'User1',
            review: 'Great experience!',
            rating: 4.5,
            listing: listing1._id
        });
        await Review.create({
            userName: 'User2',
            review: 'Could be better.',
            rating: 3.0,
            listing: listing1._id
        });

        // Create reviews for listing 2
        await Review.create({
            userName: 'User3',
            review: 'Awesome!',
            rating: 5.0,
            listing: listing2._id
        });
        await Review.create({
            userName: 'User4',
            review: 'Not what I expected.',
            rating: 2.5,
            listing: listing2._id
        });
        
        // Create reviews for listing 3
        await Review.create({
            userName: 'User5',
            review: 'Awesome!',
            rating: 5.0,
            listing: listing3._id
        });
        await Review.create({
            userName: 'User6',
            review: 'Amazing!',
            rating: 4.5,
            listing: listing3._id
        });

        // Create reviews for Lising 4

        await Review.create({
            userName: 'User7',
            review: 'Awesome!',
            rating: 5.0,
            listing: listing4._id
        });
        await Review.create({
            userName: 'User8',
            review: 'Amazing!',
            rating: 4.5,
            listing: listing4._id
        });

        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        db.close();
    }
};

main();

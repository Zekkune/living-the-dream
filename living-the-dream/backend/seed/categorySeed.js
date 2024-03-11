const db = require('../db');
const { Category } = require('../models');
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    try {

        await Category.deleteMany({});

        // Create categories
        const categories = [
            { name: 'Disney' },
            { name: 'Marvel' },
            { name: 'Horror' },
            { name: 'Lord of Rings' }
        ];

        await Category.insertMany(categories);

        console.log('Categories created successfully');
    } catch (error) {
        console.error('Error creating categories:', error);
    } finally {
        db.close();
    }
};

main();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { Listing, Review } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/dreamDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes for listings

// Get all listings
app.get('/listings', async (req, res) => {
  try {
    const listings = await Listing.find({});
    res.json(listings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a listing by ID
app.get('/listings/:id', async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    res.json(listing);
  } catch (error) {
    res.status(404).json({ message: 'Listing not found' });
  }
});

// Create a new listing
app.post('/listings', async (req, res) => {
  try {
    const newListing = await Listing.create(req.body);
    res.status(201).json(newListing);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a listing by ID
app.put('/listings/:id', async (req, res) => {
  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedListing);
  } catch (error) {
    res.status(404).json({ message: 'Listing not found' });
  }
});

// Delete a listing by ID
app.delete('/listings/:id', async (req, res) => {
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.json({ message: 'Listing deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: 'Listing not found' });
  }
});

// Routes for reviews

// Get all reviews for a listing
app.get('/listings/:listingId/reviews', async (req, res) => {
  try {
    const reviews = await Review.find({ listing: req.params.listingId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new review for a listing
app.post('/listings/:listingId/reviews', async (req, res) => {
  try {
    const newReview = await Review.create({
      ...req.body,
      listing: req.params.listingId,
    });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a review by ID
app.put('/reviews/:id', async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedReview);
  } catch (error) {
    res.status(404).json({ message: 'Review not found' });
  }
});

// Delete a review by ID
app.delete('/reviews/:id', async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: 'Review not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

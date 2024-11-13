// routes/influencerRoutes.js
const express = require('express');
const router = express.Router();
const Influencer = require('../models/Influencer'); // Assuming you have a Mongoose model

// GET /api/influencers - Get all influencers
router.get('/', async (req, res) => {
  try {
    const influencers = await Influencer.find({});
    res.json(influencers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

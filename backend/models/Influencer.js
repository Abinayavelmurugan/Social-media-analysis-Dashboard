
// models/Influencer.js
const mongoose = require('mongoose');

const influencerSchema = new mongoose.Schema({
  name: String,
  followers_millions: Number,
  average_likes: Number,
  influence_score: Number
});

module.exports = mongoose.model('Influencer', influencerSchema);

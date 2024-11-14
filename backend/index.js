
// index.js
const express = require('express');
const mongoose = require('mongoose');
const influencerRoutes = require('./routes/influencerRoutes');
const authRoutes = require('./routes/authRoutes'); // Import auth routes
const cors = require('cors');

const app = express();
const PORT = 5000;

// Configure CORS middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests only from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Define allowed methods
  credentials: true, // Allow cookies if necessary
}));

// Middleware to parse JSON requests
app.use(express.json());

// Route definitions
app.use('/api/influencers', influencerRoutes);
app.use('/api/auth', authRoutes); // Add auth routes

// Connect to MongoDB
mongoose.connect('mongodb url', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

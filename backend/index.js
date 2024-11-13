// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const PORT = process.env.PORT || 5000;
// const instagramRoutes = require('./routes/influencersRoutes');
// app.use('/api/instagram', instagramRoutes);


// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.log('Error connecting to MongoDB:', err));

// app.get('/', (req, res) => {
//   res.send('API is running');
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


// server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const influencerRoutes = require('./routes/influencerRoutes');

// const app = express();
// const PORT = 5000;

// app.use(express.json());
// app.use('/api/influencers', influencerRoutes);

// mongoose.connect("mongodb+srv://abinayav862:NXm7iRJzXx1muAxT@cluster0.q2l2z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


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
mongoose.connect('mongodb+srv://abinayav862:NXm7iRJzXx1muAxT@cluster0.q2l2z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

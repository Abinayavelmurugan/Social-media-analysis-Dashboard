const express = require('express');
const router = express.Router();

// Sign-in route
router.post('/signin', (req, res) => {
  const { username, password } = req.body;
  
  // Mock validation (replace with real logic)
  if (username === 'john.doe@example.com' && password === 'hashed_password_1') {
    res.status(200).json({ message: 'Sign-in successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;

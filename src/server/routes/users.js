const express = require('express');

const router = express.Router();

router.get('/users', (req, res) => {
  res.send('We are on Users');
});

module.exports = router;
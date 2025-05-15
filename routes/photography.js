const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/photography', (req, res) => {
  res.sendFile(path.join(__dirname, '../HTML/photography.html'));
});

module.exports = router;
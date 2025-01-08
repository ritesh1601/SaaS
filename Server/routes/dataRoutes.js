const express = require('express');
const { fetchData } = require('../controllers/dataController');

const router = express.Router();

// Define routes
router.get('/', fetchData);

module.exports = router;

const express = require('express');
const {genNewShortURL,handleGetAnalytics} = require('../contollers/url');

const router = express.Router();

router.post('/',genNewShortURL);

router.get('/analytics',handleGetAnalytics);

module.exports = router;
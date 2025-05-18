const express = require('express');
const router = express.Router();
const getLatestNews = require('../scraper');

router.get('/', async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;

  try {
    const news = await getLatestNews(limit);
    res.json(news);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

module.exports = router;

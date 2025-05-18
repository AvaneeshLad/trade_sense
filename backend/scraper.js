// server/scraper.js
const axios = require('axios');
const cheerio = require('cheerio');

async function getLatestNews(limit = 10) {
  const url = 'https://pulse.zerodha.com/';
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const items = $('ul#news li.box.item').slice(0, limit);

  const news = [];
  items.each((_, el) => {
    const title = $(el).find('h2.title a').text().trim();
    const url = $(el).find('h2.title a').attr('href');
    const description = $(el).find('div.desc').text().trim();
    const time = $(el).find('span.date').attr('title') || '';
    const source = $(el).find('span.feed').text().replace('—', '').trim();

    news.push({ title, url, description, time, source });
  });

  return news;
}

module.exports = getLatestNews;

# 📈 PaperTrade - Stock Trading Simulation Platform

PaperTrade is a full-stack stock trading simulation platform that allows users to explore financial markets, monitor real-time news, simulate trades, and manage a personalized watchlist. Built with a modern tech stack including **React (Vite SPA)**, **Node.js/Express**, and **MongoDB Atlas**, it also leverages **Yahoo Finance**, **PulseNews APIs**, and custom **news scrapers** for a rich user experience.

---

## 🚀 Features

- 🔐 User Authentication (JWT-based)
- 💼 Trade Simulation with transaction history
- 📊 Real-time stock data via Yahoo Finance API
- 📰 News feed via PulseNews API and custom scrapers
- 👀 Personalized Watchlist and Recently Visited tracking
- 📅 Scheduled news scraping using Cron jobs
- ☁️ Fully cloud-based (MongoDB Atlas, Vercel hosting)

---

## 🧱 Architecture Overview

### 👨‍💻 Frontend – React (Vite)

- `App.jsx`, `main.jsx`: Main entry points
- `pages/`: Route-based views
- `components/`: Reusable UI components
- `vite.config.js`: Vite configuration
- `vercel.json`: Frontend deployment config

### 🌐 Backend – Express.js (Node)

- `server.js`: Main server entry
- `authMiddleware.js`: Authentication layer
- `db.js`: MongoDB Atlas connection
- Routes:
  - `authRoutes.js`, `quoteRoutes.js`, `tradeRoutes.js`
  - `watchlistRoutes.js`, `visitedRoutes.js`, `updateRoutes.js`
  - `newsRoutes.js`, `pulseNewsRoutes.js`, `yahooRoutes.js`
- Models (MongoDB Schemas):
  - `User.js`, `Trade.js`, `Transaction.js`, `Watchlist.js`, `RecentlyVisited.js`

### 📰 News Scraping

- `news_scraper.py`: Python-based news scraper
- `scraper.js`: (Optional) JS-based fallback
- Runs on a scheduler/cron job
- Scraped data is stored in MongoDB

### 🌍 External APIs

- [Yahoo Finance API](https://www.yahoofinanceapi.com/)
- [PulseNews API](https://pulse.zerodha.com/)
  
### 💾 Database

- MongoDB Atlas (cloud-hosted NoSQL database)

---

## 📦 Project Structure

papertrade/
├── backend/
│ ├── models/
│ │ ├── User.js
│ │ ├── Trade.js
│ │ ├── Transaction.js
│ │ ├── Watchlist.js
│ │ └── RecentlyVisited.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ ├── quoteRoutes.js
│ │ ├── tradeRoutes.js
│ │ ├── watchlistRoutes.js
│ │ ├── visitedRoutes.js
│ │ ├── updateRoutes.js
│ │ ├── newsRoutes.js
│ │ ├── pulseNewsRoutes.js
│ │ └── yahooRoutes.js
│ ├── authMiddleware.js
│ ├── db.js
│ ├── server.js
│ └── vercel.json
│
├── frontend/
│ ├── components/
│ ├── pages/
│ ├── App.jsx
│ ├── main.jsx
│ ├── vite.config.js
│ └── vercel.json
│
├── news_scraping/
│ ├── news_scraper.py
│ └── scraper.js
│
├── .env (not included)
└── README.md


---

## 📋 Prerequisites

Before running the app, ensure you have the following installed:

- **Node.js** (v18 or later)
- **npm** (v9 or later)
- **Python 3.x** (for scraping scripts)
- **MongoDB Atlas** account
- **Vercel CLI** (for deployment)

---

## 🔧 Local Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/papertrade.git
cd papertrade

MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
YAHOO_API_KEY=your_yahoo_api_key (if required)



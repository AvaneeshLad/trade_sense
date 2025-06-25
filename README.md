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

### 🌍 External APIs

- [Yahoo Finance API](https://www.yahoofinanceapi.com/)
- [PulseNews API](https://pulse.zerodha.com/)
  
### 💾 Database

- MongoDB Atlas (cloud-hosted NoSQL database)


## 📦 Project Structure

# Project Structure

papertrade/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Trade.js
│   │   ├── Transaction.js
│   │   ├── Watchlist.js
│   │   └── RecentlyVisited.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── quoteRoutes.js
│   │   ├── tradeRoutes.js
│   │   ├── watchlistRoutes.js
│   │   ├── visitedRoutes.js
│   │   ├── updateRoutes.js
│   │   ├── newsRoutes.js
│   │   ├── pulseNewsRoutes.js
│   │   └── yahooRoutes.js
│   ├── authMiddleware.js
│   ├── db.js
│   ├── server.js
│   └── vercel.json
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   ├── vite.config.js
│   └── vercel.json
└── news_scraping/
    ├── news_scraper.py
    ├── scraper.js
    ├── .env (not included)
    └── README.md
---

## 📦 Tech Stack

### 🔹 Frontend
- React (Vite)
- React Router
- Axios

### 🔹 Backend
- Node.js + Express.js
- Mongoose (MongoDB)
- JSON Web Token (JWT)

### 🔹 Database
- MongoDB Atlas (cloud-hosted NoSQL)

### 🔹 External APIs
- Yahoo Finance API (market data)
- PulseNews (curated news)

### 🔹 News Scraping
- Python + BeautifulSoup for scraping
---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/papertrade.git
cd papertrade

```
### 2. Setup Environment Variables

Create a `.env` file inside the `backend/` directory with the following content:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
YAHOO_API_KEY=your_yahoo_api_key (if required)
```
```env
Create a `.env` file inside the `frontend/` directory with the following content:
VITE_GOOGLE_CLIENT_ID = generate
```

## ✨ Features

- 🔐 **User Authentication** – JWT-based signup and login system for secure access.
- 📈 **Simulated Trading** – Place mock buy/sell trades and track your trading history.
- ⭐ **Watchlist Support** – Add and manage your personal stock watchlist.
- 📍 **Recently Visited** – Automatically keeps track of stocks you've viewed.
- 📊 **Live Stock Quotes** – Integrated with Yahoo Finance API for real-time data.
- 📰 **News Feed** – Real-time market news from Pulse by Zerodha and a custom scraper.
- 🧠 **Clean REST API** – Built using modular Express routes for scalability.
- ☁️ **Cloud MongoDB** – Utilizes MongoDB Atlas for secure cloud data storage.
- ⚛️ **Modern Frontend** – Fast and responsive single-page app using React + Vite.

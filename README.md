## Trade Sense

A full-stack stock trading simulation platform with real-time data, portfolio management, and news, built with **MERN** (MongoDB, Express, React, Node.js) and modern frontend tooling.

### Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [License](#license)

### Features

- User authentication (JWT-based)
- Simulated stock trading (buy/sell)
- Portfolio and transaction history
- Real-time stock quotes and news
- Watchlist management
- Responsive, modern React UI (Vite, TailwindCSS)
- Data visualization (charts, dashboards)
- Session management and notifications

### Project Structure

```
trade_sense-main/
  backend/    # Node.js, Express, MongoDB (API, auth, trading logic)
  frontend/   # React, Vite, TailwindCSS (UI, routing, charts)
```

### Backend Setup

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Environment variables:**
   - Create a `.env` file in `backend/` with:
     ```
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     FRONTEND_URL=http://localhost:5173
     PORT=5000
     ```

3. **Run the server:**
   ```bash
   npm run dev
   ```
   The backend will start on `http://localhost:5000`.

### Frontend Setup

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
 
   ```

2. **Environment variables:**
   - Create a `.env` file in `frontend/` with:
     ```
     VITE_GOOGLE_CLIENT_ID=your_google_client_id
     VITE_BASE_URL=http://localhost:5000
     ```

3. **Run the app:**
   ```bash
   npm run dev
   ```
   The frontend will start on `http://localhost:5173`.

### API Endpoints

- `POST /api/auth` - User authentication (login/signup)
- `GET /api/trades` - Get user trades (protected)
- `POST /api/trades` - Buy stock (protected)
- `POST /api/trades/sell` - Sell stock (protected)
- `GET /api/trades/transactions` - Transaction history
- `GET /api/quote` - Real-time stock quotes
- `GET /api/news` - Latest news
- `GET /api/watchlist` - User watchlist management
- ...and more (see `/backend/routes/` for all endpoints)

### Screenshots

### Intro page
![image](https://github.com/user-attachments/assets/0d351c27-111b-430f-be59-8557648738a9)

### Home Page
![image](https://github.com/user-attachments/assets/a9f7e63b-affa-4dae-a2ec-82b7b33080d9)

### Market News and Watchlist
![image](https://github.com/user-attachments/assets/bb0ca3f1-2130-43c9-b1f7-58b36c4d7e4f)

### Portfolio Page
![image](https://github.com/user-attachments/assets/641cfc45-ee06-44ad-bdb3-5009a6759efd)

### Orders Page
![image](https://github.com/user-attachments/assets/0e7a4b72-0bdf-43ee-b4f6-86ffeae45086)

### License
MIT

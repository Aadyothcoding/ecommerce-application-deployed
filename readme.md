# Ecommerce App

A simple full-stack ecommerce application built with:

- **Frontend:** React, Chakra UI, Zustand, React Router, Vite
- **Backend:** Node.js, Express, MongoDB, Mongoose

## Features

- View all products
- Create new products
- Edit and delete products
- Responsive UI with Chakra UI
- State management with Zustand

## Live Demo

The app is deployed at:  
👉 [https://ecommerce-application-deployed.onrender.com](https://ecommerce-application-deployed.onrender.com)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB database (local or Atlas)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/ecommerce-app.git
   cd ecommerce-app
   ```

2. **Backend setup:**
   - Create a `.env` file in the root with your MongoDB URI and port:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=3000
     ```
   - Install backend dependencies:
     ```sh
     npm install
     ```

3. **Frontend setup:**
   ```sh
   cd frontend
   npm install
   ```

### Running Locally

1. **Start the backend:**
   ```sh
   npm run dev
   ```
2. **Start the frontend (in a new terminal):**
   ```sh
   cd frontend
   npm run dev
   ```

The frontend will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

## Folder Structure

```
ecommerce-app/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── src/
│   ├── public/
│   ├── index.html
│   └── vite.config.js
├── .env
├── package.json
└── readme.md
```

## License

MIT

---

**Deployed at:** [https://ecommerce-application-deployed.onrender.com](https://ecommerce-application-deployed.onrender.com)
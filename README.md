<div align="center">

# 🗳️ PulsePolls

### A Full-Stack Real-Time Polling Platform

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_App-6C63FF?style=for-the-badge)](https://pulse-polls-ue2p.vercel.app/)
[![Backend API](https://img.shields.io/badge/🔌_Backend_API-Render-00B4A6?style=for-the-badge)](https://pulsepolls.onrender.com)
[![MIT License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)](LICENSE)

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

## 📖 Overview

**PulsePolls** is a production-ready, full-stack polling web application built on the **MERN stack**. It allows users to sign up, create polls, cast votes, explore other users' profiles, and manage their own poll activity — all backed by a secure, JWT-authenticated REST API deployed on the cloud.

This project demonstrates hands-on expertise in **end-to-end web development**, from designing RESTful APIs and database modeling in MongoDB to building a responsive, animated React frontend with robust state management via Redux Toolkit.

> 🔗 **Live:** [https://pulse-polls-ue2p.vercel.app/](https://pulse-polls-ue2p.vercel.app/) &nbsp;|&nbsp; **API:** [https://pulsepolls.onrender.com](https://pulsepolls.onrender.com)

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🔐 **JWT Authentication** | Secure login/signup with JSON Web Tokens stored in HTTP-only cookies |
| 🗳️ **Poll Management** | Create custom multi-option polls; delete your own polls at any time |
| ✅ **Voting System** | Vote in polls with real-time UI updates |
| 👤 **User Profiles** | View your own profile and browse other users' public poll activity |
| 🔍 **User Search** | Find users by name with fuzzy matching via `string-similarity` |
| 🔄 **Persistent State** | Redux Persist keeps user session alive across browser refreshes |
| 📱 **Responsive Design** | Fully mobile-friendly UI built with TailwindCSS |
| ⚡ **Smooth Animations** | Fluid page transitions and micro-interactions using Framer Motion |
| 🍞 **Toast Notifications** | Real-time feedback for all user actions via `react-hot-toast` |
| ☁️ **Cloud Deployed** | Frontend on Vercel, Backend on Render, Database on MongoDB Atlas |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **React 19** + Vite | Component-based UI with lightning-fast HMR |
| **Redux Toolkit** + Redux Persist | Global state management with session persistence |
| **TailwindCSS** | Utility-first responsive styling |
| **Framer Motion** | Declarative animations and page transitions |
| **React Router DOM v7** | Client-side routing and navigation |
| **Axios** | Promise-based HTTP client for API calls |
| **TanStack Query (React Query)** | Async data fetching, caching and synchronization |
| **MUI (Material UI)** | Pre-built accessible UI components |
| **React Hot Toast** | Non-intrusive notification system |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js** + **Express.js v5** | RESTful API server with async/await routing |
| **MongoDB** + **Mongoose** | NoSQL database with schema validation & ODM |
| **JWT** + **bcrypt** | Stateless auth with hashed passwords |
| **Cookie Parser** + **CORS** | Secure cookie handling and cross-origin support |
| **dotenv** | Secure environment variable management |
| **string-similarity** | Fuzzy user search algorithm |
| **nodemon** | Dev hot-reloading for rapid iteration |

### DevOps & Hosting
| Service | Role |
|---|---|
| **Vercel** | Frontend CI/CD — auto-deploys on every `git push` |
| **Render** | Backend hosting with zero-config deployments |
| **MongoDB Atlas** | Managed cloud database with connection pooling |
| **GitHub** | Version control and source of truth for CI/CD pipelines |

---

## 🏗️ Architecture & Project Structure

```
PulsePolls/
├── 📁 frontend/                       # React + Vite SPA
│   └── src/
│       ├── components/                # All UI components (15+ components)
│       │   ├── LoginPage.jsx          # Auth form with validation
│       │   ├── Signup.jsx             # New user registration
│       │   ├── HomePage.jsx           # Feed of all public polls
│       │   ├── CreatePoll.jsx         # Poll creation form
│       │   ├── PollBox.jsx            # Individual poll card with vote logic
│       │   ├── MyProfile.jsx          # Authenticated user dashboard
│       │   ├── OthersProfile.jsx      # Public user profile view
│       │   ├── SearchResultProfile.jsx# Search result user cards
│       │   └── ...                    # More components
│       └── redux/
│           ├── store.js               # Redux store + redux-persist config
│           ├── userSlice.js           # User auth state & reducers
│           └── PollSlice.js           # Poll state & reducers
│
└── 📁 backend/                        # Node.js + Express REST API
    ├── config/
    │   └── database.js                # MongoDB Atlas connection
    ├── controllers/
    │   ├── userController.js          # Signup, Login, Logout, Profile, Search
    │   └── pollController.js          # Create, Read, Delete, Vote operations
    ├── middleware/
    │   └── isAuthenticated.js         # JWT verification middleware
    ├── models/
    │   ├── userModel.js               # Mongoose User schema
    │   └── pollModel.js               # Mongoose Poll schema
    ├── routes/
    │   ├── userRoutes.js              # /api/v1/user/*
    │   └── pollRoutes.js              # /api/v1/polls/*
    └── index.js                       # Express app entrypoint
```

---

## 🔌 API Endpoints

### User Routes — `/api/v1/user`

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/signup` | ❌ | Register a new user account |
| `POST` | `/login` | ❌ | Login and receive JWT cookie |
| `GET` | `/logout` | ✅ | Logout and clear auth cookie |
| `GET` | `/profile/:id` | ✅ | Get a user's public profile |
| `PUT` | `/profile/update` | ✅ | Update current user's profile |
| `GET` | `/search?query=` | ✅ | Search users by name (fuzzy match) |

### Poll Routes — `/api/v1/polls`

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/create` | ✅ | Create a new poll |
| `GET` | `/all` | ✅ | Fetch all polls (home feed) |
| `GET` | `/user/:id` | ✅ | Get all polls by a specific user |
| `POST` | `/vote/:pollId` | ✅ | Cast a vote on a poll option |
| `DELETE` | `/delete/:pollId` | ✅ | Delete a poll (owner only) |

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js `v18+`
- npm `v9+`
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account (free tier works)

### 1. Clone the Repository

```bash
git clone https://github.com/vivekanandpandey27/PulsePolls.git
cd PulsePolls
```

### 2. Configure & Run the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `/backend`:

```env
PORT=8080
MONGO_URI=your_mongodb_atlas_connection_string
secret_code=your_jwt_secret_key
```

Start the backend server:

```bash
npm run dev        # Development (with nodemon hot-reload)
# or
npm start          # Production
```

> Backend runs on `http://localhost:8080`

### 3. Configure & Run the Frontend

```bash
cd ../frontend
npm install
```

Create a `.env` file inside `/frontend`:

```env
VITE_REACT_APP_BACKEND_BASE_URL=http://localhost:8080
```

Start the development server:

```bash
npm run dev
```

> Frontend runs on `http://localhost:5173`

---

## ☁️ Deployment

This project follows a **Continuous Deployment** workflow:

```
Developer pushes to GitHub
        │
        ├──► Vercel detects push → Builds & deploys frontend automatically
        │
        └──► Render detects push → Rebuilds & deploys backend automatically
```

| Service | Configuration |
|---|---|
| **Vercel** | Auto-deploy on `main` branch push; env vars set in dashboard |
| **Render** | Auto-deploy on `main` branch push; `npm start` as start command |
| **MongoDB Atlas** | Connection string stored securely in Render environment variables |

---

## 🔐 Security Highlights

- **Password Hashing** — All passwords hashed with `bcrypt` before storage
- **JWT in HTTP-only Cookies** — Tokens are never exposed to JavaScript, preventing XSS attacks
- **CORS Configuration** — Explicitly whitelists allowed origins
- **Auth Middleware** — All protected routes validated server-side before any data is returned
- **Environment Variables** — All secrets managed via `.env` files, never committed to git

---

## 📸 Screenshots

> 🌐 Visit the [live app](https://pulse-polls-ue2p.vercel.app/) to see it in action!

---

## 🧠 What I Learned & Demonstrated

- Building a **production-grade full-stack app** from scratch with the MERN stack
- Designing and implementing a **secure REST API** with JWT-based stateless authentication
- **Redux Toolkit** state management patterns with **Redux Persist** for seamless UX
- **React 19** and modern hooks-based architecture with **Vite** for optimized builds
- **Asynchronous data fetching** and caching strategies using TanStack Query (React Query)
- **Fuzzy search** implementation using string-similarity for smart user discovery
- **CI/CD pipeline** using GitHub + Vercel + Render for zero-downtime deployments
- **MongoDB schema design** and Mongoose ODM for relational-like queries in NoSQL

---

## 👨‍💻 Authors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/vivekanandpandey27">
        <b>Vivekanand Pandey</b>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/SamMish45">
        <b>Samar Mishra</b>
      </a>
    </td>
  </tr>
</table>

---

## 📃 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ and lots of ☕ — **PulsePolls** | Full-Stack MERN Application

⭐ If you found this project impressive, please give it a **star**!

</div>

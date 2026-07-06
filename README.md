# 🗳️ PulsePolls

**PulsePolls** is a full-stack web application that lets users **create,delete and vote** in polls. It is built using the **MERN stack (MongoDB, Express.js, React, Node.js)**.

## 🚀 Live Demo

- **Frontend (Vercel):** [https://pulse-polls-ue2p.vercel.app/](https://pulse-polls-ue2p.vercel.app/)
- **Backend (Render):** [https://pulsepolls.onrender.com](https://pulsepolls.onrender.com)

---

## 📌 Features

- 👤 User Authentication (Login / Signup)
- 📊 Create and manage custom polls
- 🗑️ Delete your own polls anytime
- 🔍 Search and view other users’ profiles
- 👁️ See polls created by other users on their profile pages
- ✅ Vote in polls
- 🔒 Secure backend with JWT & Cookies
- 💾 Persistent Redux state across refresh
- 📱 Fully responsive UI

---

## 🛠️ Tech Stack

**Frontend**
- React (with Vite)
- Redux Toolkit & Redux Persist
- Axios
- TailwindCSS
- React Icons

  
**Backend**
- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT & bcrypt
- CORS, Cookie Parser

**Hosting**
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## 📁 Project Structure

## 📁 Frontend Folder Structure

```
frontend/
├── public/
│   └── index.html               # HTML template used by Vite
│
├── src/
│   ├── assets/                  # Images, logos, and static files
│
│   ├── components/              # All UI and functional React components
│   │   ├── Categories.jsx
│   │   ├── Completed_Poll.jsx
│   │   ├── CreatePoll.jsx
│   │   ├── editProfile.jsx
│   │   ├── Header_box.jsx
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── MyPolls.jsx
│   │   ├── MyProfile.jsx
│   │   ├── NavButton.jsx
│   │   ├── OthersPolls.jsx
│   │   ├── OthersProfile.jsx
│   │   ├── PollBox.jsx
│   │   ├── Polls.jsx
│   │   ├── Polls_mine.jsx
│   │   ├── SearchResultProfile.jsx
│   │   └── Signup.jsx
│
│   ├── redux/                   # Redux slices and store config
│   │   ├── PollSlice.js
│   │   ├── userSlice.js
│   │   └── store.js
│
│   ├── App.jsx                  # Main component with routing and layout
│   ├── App.css                  # Global styles
│   ├── index.js                 # Legacy entry point (not used by Vite)
│   ├── main.jsx                 # Vite’s actual entry point
│   └── .env                     # Frontend environment variables
│
├── .gitignore
├── eslint.config.js
├── package.json
└── package-lock.json
```


## 📁 Backend Folder Structure

```
backend/
├── config/
│   └── database.js            # MongoDB connection logic
│
├── controllers/
│   ├── pollController.js      # Logic for poll operations (create, delete, fetch, etc.)
│   └── userController.js      # Logic for user Login, Signup, LogOut etc.
│
├── middleware/
│   └── isAuthenticated.js     # Middleware to User Authentication
│
├── models/
│   ├── pollModel.js           # Mongoose schema for polls
│   └── userModel.js           # Mongoose schema for users
│
├── routes/
│   ├── pollRoutes.js          # All routes related to polls
│   └── userRoutes.js          # All routes related to users (login/signup)
│
├── .env                       # Environment variables (not committed to Git)
├── index.js                   # Entry point for the Express app
├── package.json               # Backend dependencies and scripts
└── package-lock.json          # Dependency lock file
```

---

## 🧑‍💻 Getting Started Locally

### 1. Clone the repo

```bash
git clone https://github.com/your-username/PulsePolls.git
cd PulsePolls
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create `.env` file in `/backend`:

```
PORT=8080
MONGO_URI=your_mongodb_connection_string
secret_code=your_jwt_secret
```

Start server:

```bash
npm start
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

Create `.env` in `/frontend`:

```
VITE_REACT_APP_BACKEND_BASE_URL=https://pulsepolls.onrender.com
```

Start dev server:

```bash
npm run dev
```

---

## 🔐 Environment Variables

### Backend `.env`

```
PORT=8080
MONGO_URI=<your MongoDB URI>
secret_code=<your JWT secret>
```

### Frontend `.env`

```
VITE_REACT_APP_BACKEND_BASE_URL=https://pulsepolls.onrender.com
```

---

## ⚙️ Deployment

- **Frontend:** Push changes to GitHub → Vercel auto-deploys
- **Backend:** Push changes to GitHub → Render auto-deploys

---

## 🧠 Author

Made with ❤️ by [Vivekanand Pandey](https://github.com/vivekanandpandey27) and  [Samar Mishra](https://github.com/SamMish45) 

---

## 📃 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

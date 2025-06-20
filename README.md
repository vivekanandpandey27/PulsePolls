# 🗳️ PulsePolls

**PulsePolls** is a full-stack web application that lets users **create, share, and vote** in polls. It is built using the **MERN stack (MongoDB, Express.js, React, Node.js)**.

## 🚀 Live Demo

- **Frontend (Vercel):** [https://pulsepolls.vercel.app](https://pulsepolls.vercel.app)
- **Backend (Render):** [https://pulse-polls-ue2p.vercel.app/](https://pulse-polls-ue2p.vercel.app/)

---

## 📌 Features

- 👤 User Authentication (Login / Signup)
- 📊 Create and manage custom polls
- 🗑️ Delete your own polls anytime
- 🔍 Search and view other users’ profiles
- 👁️ See polls created by other users on their profile pages
- ✅ Vote in polls
- 🔒 Secure backend with JWT & Cookies
- 🧠 Smart poll suggestions using string similarity
- 💾 Persistent Redux state across refresh
- 📱 Fully responsive UI

---

## 🛠️ Tech Stack

**Frontend**
- React (with Vite)
- Redux Toolkit & Redux Persist
- Axios
- TailwindCSS

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

```
PulsePolls/
├── frontend/           # React + Redux frontend
│   ├── src/
│   ├── public/
│   └── ...
├── backend/            # Express + Mongo backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── ...
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
npm start
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
- Make sure CORS and cookies are set correctly in production

---

## 🧠 Author

Made with ❤️ by [Vivekanand Pandey](https://github.com/vivekanandpandey27) and  [Samar Mishra](https://github.com/SamMish45) 

---

## 📃 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

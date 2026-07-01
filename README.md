# 📋 Task Manager

A full-stack Task Manager application built using the MERN stack. It allows users to register, log in securely, and manage their personal tasks with features like add, edit, delete, and mark tasks as completed.

---

## 🚀 Features

- 🔐 User Authentication (Register & Login)
- 🔑 JWT-based Authorization
- 🔒 Password Encryption using bcrypt
- 📝 Create Tasks
- ✏️ Edit Tasks
- ❌ Delete Tasks
- ✅ Mark Tasks as Completed
- 👤 User-specific Task Dashboard
- 🚪 Logout Functionality
- 📱 Responsive UI
- ☁️ MongoDB Atlas Database

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- Bootstrap 5

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- CORS
- dotenv

---

## 📂 Project Structure

```
task-manager/
│
├── backend/
│   ├── src/
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── .env
│
├── docs/
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/task-manager.git
```

### Navigate to Project

```bash
cd task-manager
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY
```

Start the backend:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

Frontend:

```
http://localhost:5173
```

Backend:

```
http://localhost:5000
```

---

## 🔗 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

### Tasks

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/tasks | Get All Tasks |
| POST | /api/tasks | Create Task |
| PUT | /api/tasks/:id | Update Task |
| DELETE | /api/tasks/:id | Delete Task |

---

## 🔒 Authentication

Protected routes use JWT authentication.

Include the token in the request header:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 📸 Screenshots

### Login Page

<img width="1907" height="868" alt="image" src="https://github.com/user-attachments/assets/cc20d4e0-c315-4640-a745-0af08a6cef06" />


---

### Register Page

<img width="1907" height="838" alt="image" src="https://github.com/user-attachments/assets/a4b24708-cc4b-40fe-823d-ea30d84637d8" />


---

### Dashboard

<img width="1900" height="896" alt="image" src="https://github.com/user-attachments/assets/6c6454b7-1497-430d-b755-b60678317250" />


---

## 🌐 Live Demo

Frontend:

```
https://your-vercel-url.vercel.app
```

Backend:

```
https://your-render-url.onrender.com
```

---

## 📁 GitHub Repository

```
https://github.com/YOUR_USERNAME/task-manager
```

---

## 👨‍💻 Author

**Nallamothu Bhadri**

Computer Science Engineering Student

Andhra University

GitHub:
https://github.com/YOUR_USERNAME

---

## 📄 License

This project is developed for educational and portfolio purposes.

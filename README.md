# ☕ Coffee Management Client

A modern **full-stack coffee management web application** with authentication, CRUD operations, and a clean responsive UI. This project demonstrates real-world integration between **React, Firebase, Express, and MongoDB**.

---

## 🌐 Live Demo

* 🔗 **Frontend (Firebase Hosting)**
  https://coffee-store-app-77cb4.web.app

* 🔗 **Backend API (Vercel)**
  https://coffee-management-server.vercel.app

---

## 🚀 Features

### 🔐 Authentication

* Email & Password Signup/Login (Firebase Auth)
* User profile storage (name, phone, address, photo)
* Last login time tracking
* Context-based global auth state

---

### ☕ Coffee Management (CRUD)

* 📄 View all coffees (grid layout)
* 🔍 Coffee details page
* ➕ Add new coffee
* ✏️ Update coffee information
* ❌ Delete coffee with confirmation

---

### 👥 User Management

* View all registered users
* Display user profiles (avatar, email, phone, address)
* Delete users

---

### 🎨 UI/UX Highlights

* Fully responsive design (mobile → desktop)
* Tailwind CSS + DaisyUI components
* SweetAlert2 for beautiful alerts
* Loading states for better UX

---

## 🛠️ Tech Stack

### ⚙️ Frontend

* React 18
* React Router (Data API)
* Vite

### 🔐 Authentication

* Firebase Authentication

### 🎨 Styling

* Tailwind CSS
* DaisyUI

### 🌐 Backend

* Node.js + Express
* MongoDB Atlas

---

## 📁 Project Structure

```
src/
├── authentication/   # Signin, Signup
├── components/       # UI Components
├── context/          # Auth Context
├── firebase/         # Firebase config
├── layouts/          # Layouts
├── App.jsx
└── main.jsx
```

---

## ⚙️ Environment Variables

Create a `.env` file:

```
VITE_API_URL=https://coffee-management-server.vercel.app

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=coffee-store-app-77cb4.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=coffee-store-app-77cb4
VITE_FIREBASE_STORAGE_BUCKET=coffee-store-app-77cb4.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 🔌 API Endpoints

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | `/coffees`     | Get all coffees   |
| GET    | `/coffees/:id` | Get single coffee |
| POST   | `/coffees`     | Add coffee        |
| PUT    | `/coffees/:id` | Update coffee     |
| DELETE | `/coffees/:id` | Delete coffee     |
| GET    | `/users`       | Get users         |
| POST   | `/users`       | Create user       |
| PATCH  | `/users`       | Update last login |
| DELETE | `/users/:id`   | Delete user       |

---

## 💻 Installation

```bash
git clone https://github.com/mehedipolash/coffee-management-client.git
cd coffee-management-client
npm install
npm run dev
```

---

## 🚢 Deployment

### Firebase Hosting

```bash
npm run build
firebase deploy
```

---

## 🐛 Common Issues

### ❌ Failed to fetch

➡️ Wrong API URL
✔ Fix: Use `VITE_API_URL`

---

### ❌ Cannot GET /route

➡️ Backend route missing
✔ Fix: Add correct Express route

---

### ❌ n.map is not a function

➡️ API didn’t return array
✔ Fix: Validate response before mapping

---

## 🎯 Future Improvements

* Email verification
* Google/GitHub login
* Search & filtering
* Pagination
* Dark mode 🌙
* Shopping cart system

---

## 👨‍💻 Author

**Mehedi Polash**
🔗 GitHub: https://github.com/mehedipolash

---

## 📄 License

MIT License

---

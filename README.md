
# ☕ Coffee Management Client

A modern web application for managing coffee products with user authentication. This is the frontend React application for the Coffee Management System, providing a beautiful and responsive user interface for browsing, adding, updating, and deleting coffee products.

## 🌐 Live Demo

- **Frontend (Firebase):** [https://coffee-store-app-77cb4.web.app](https://coffee-store-app-77cb4.web.app)
- **Backend API (Vercel):** [https://coffee-management-server.vercel.app](https://coffee-management-server.vercel.app)

## ✨ Features

### Authentication
- **Email/Password Signup** - Create new account with profile information
- **Email/Password Signin** - Secure login with Firebase Authentication
- **User Profile** - Store user details including name, address, phone, and photo
- **Last Login Tracking** - Automatically updates last sign-in time in database

### Coffee Management
- **View All Coffees** - Browse all coffee products in a responsive grid layout
- **Coffee Details** - View detailed information about each coffee
- **Add New Coffee** - Create new coffee entries with name, quantity, supplier, taste, category, details, and photo
- **Update Coffee** - Edit existing coffee information
- **Delete Coffee** - Remove coffee products with confirmation dialog

### User Management
- **View All Users** - See registered users in a table format
- **User Profiles** - Display user avatars, names, addresses, and phone numbers
- **Delete Users** - Remove users from the system

### UI/UX Features
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **SweetAlert Notifications** - Beautiful alert dialogs for all actions
- **Loading States** - Visual feedback during data fetching
- **Modern Styling** - Tailwind CSS with DaisyUI components

## 🛠️ Tech Stack

### Core
- **React 18** - UI library with Hooks and Context API
- **React Router DOM v7** - Client-side routing with loader functions
- **Vite** - Fast build tool and development server

### Authentication
- **Firebase Auth** - Email/Password authentication service

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS

### Notifications
- **SweetAlert2** - Beautiful and customizable alert dialogs

### HTTP Requests
- **Fetch API** - Native browser API for backend communication

## 📁 Project Structure
coffee-management-client/
├── public/
│ └── index.html
├── src/
│ ├── assets/ # Static assets and images
│ ├── authentication/ # Signin.jsx, Signup.jsx
│ ├── components/ # UI Components
│ │ ├── Home.jsx # Coffee listing page
│ │ ├── AddCoffee.jsx # Add new coffee form
│ │ ├── UpdateCoffee.jsx # Edit coffee form
│ │ ├── CoffeeDetails.jsx# Single coffee view
│ │ └── Users.jsx # Users list table
│ ├── context/ # React Context
│ │ ├── AuthContext.jsx # Auth context definition
│ │ └── AuthProvider.jsx # Auth provider component
│ ├── firebase/ # Firebase configuration
│ │ └── firebase.init.js # Firebase initialization
│ ├── layouts/ # Layout components
│ │ └── MainLayout.jsx # Main layout with header/footer
│ ├── App.jsx # Root component
│ ├── main.jsx # Entry point with router
│ └── index.css # Global styles
├── .env # Environment variables
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── firebase.json # Firebase hosting config
├── .firebaserc # Firebase project settings
└── README.md

text

## 🚀 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Firebase account
- Backend server running (see server README)

### Step-by-Step Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mehedipolash/coffee-management-client.git
   cd coffee-management-client
Install dependencies

bash
npm install
Configure Firebase

Go to Firebase Console

Create a new project named "coffee-store-app"

Enable Authentication → Sign-in method → Email/Password

Register a web app in your Firebase project

Copy your Firebase configuration object

Create .env file

env
# Backend API URL
VITE_API_URL=https://coffee-management-server.vercel.app

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=coffee-store-app-77cb4.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=coffee-store-app-77cb4
VITE_FIREBASE_STORAGE_BUCKET=coffee-store-app-77cb4.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
Start development server

bash
npm run dev
The application will open at http://localhost:5173

📦 Available Scripts
Command	Description
npm run dev	Start development server with hot reload
npm run build	Create production build in dist/ folder
npm run preview	Preview production build locally
firebase deploy	Deploy to Firebase Hosting
🔌 API Integration
Backend Endpoints Used
Method	Endpoint	Purpose
GET	/coffees	Fetch all coffee products
GET	/coffees/:id	Fetch single coffee details
POST	/coffees	Add new coffee
PUT	/coffees/:id	Update existing coffee
DELETE	/coffees/:id	Delete coffee
GET	/users	Fetch all users
POST	/users	Create new user profile
PATCH	/users	Update user's last login time
DELETE	/users/:id	Delete user
Example API Call
javascript
// Fetch all coffees
const response = await fetch(`${import.meta.env.VITE_API_URL}/coffees`);
const coffees = await response.json();

// Add new coffee
const newCoffee = { name, quantity, supplier, taste, category, details, photo };
const response = await fetch(`${import.meta.env.VITE_API_URL}/coffees`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newCoffee)
});
🔐 Authentication Flow
Sign Up Process
User fills registration form (name, email, password, address, phone, photo)

Firebase creates authentication account

User profile saved to MongoDB database

SweetAlert shows success message

User redirected to home page

Sign In Process
User enters email and password

Firebase authenticates credentials

Backend updates user's lastSignInTime

User info stored in AuthContext

SweetAlert shows welcome message

Auth Context Structure
javascript
const userInfo = {
  createUser: (email, password) => { /* Firebase signup */ },
  signInUser: (email, password) => { /* Firebase signin */ }
};
🎨 UI Components
Coffee Card
Displays coffee image, name, and category

View, Edit, and Delete buttons

Responsive grid layout

User Table
Shows user avatar, name, address, phone, email

Delete user functionality

Real-time updates after deletion

Forms
Add Coffee form with all fields

Update Coffee form with pre-filled data

Signup form with validation

Signin form with email/password

🚢 Deployment
Deploy to Firebase Hosting
Install Firebase CLI globally

bash
npm install -g firebase-tools
Login to Firebase

bash
firebase login
Initialize Firebase in project

bash
firebase init
Select "Hosting"

Choose your Firebase project (coffee-store-app-77cb4)

Set dist as public directory

Configure as single-page app → Yes

Auto-build with GitHub? → No

Build the project

bash
npm run build
Deploy to Firebase

bash
firebase deploy
Your app will be live at:

text
https://coffee-store-app-77cb4.web.app
🌍 Environment Variables
Variable	Description	Example
VITE_API_URL	Backend API base URL	https://coffee-management-server.vercel.app
VITE_FIREBASE_API_KEY	Firebase API key	AIzaSyDxxx...
VITE_FIREBASE_AUTH_DOMAIN	Firebase auth domain	coffee-store-app-77cb4.firebaseapp.com
VITE_FIREBASE_PROJECT_ID	Firebase project ID	coffee-store-app-77cb4
VITE_FIREBASE_STORAGE_BUCKET	Firebase storage bucket	coffee-store-app-77cb4.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID	Firebase sender ID	1041054413396
VITE_FIREBASE_APP_ID	Firebase app ID	1:1041054413396:web:xxx
🐛 Troubleshooting
Common Issues and Solutions
1. "n.map is not a function" Error
Cause: API returned non-array response (404 HTML or error object)

Solution: Add array validation in loader

javascript
loader: async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
2. CORS Errors
Cause: Backend not configured for cross-origin requests

Solution: Ensure backend has CORS enabled

javascript
app.use(cors());
3. Firebase Authentication Fails
Solutions:

Verify Firebase configuration in .env file

Check if Email/Password is enabled in Firebase Console

Review browser console for specific error codes

4. Backend Connection Failed
Solutions:

Verify VITE_API_URL in .env file

Check if backend is deployed and running

Test API endpoint directly in browser

5. Images Not Loading
Solutions:

Ensure photo URLs are valid

Check if images are accessible publicly

Verify avatar component configuration

📦 Dependencies
Core Dependencies
json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^7.0.0",
  "firebase": "^10.0.0",
  "sweetalert2": "^11.0.0"
}
Dev Dependencies
json
{
  "vite": "^5.0.0",
  "tailwindcss": "^3.4.0",
  "daisyui": "^4.0.0",
  "@vitejs/plugin-react": "^4.0.0"
}
🎯 Future Improvements
Add email verification for new accounts

Implement password reset functionality

Add Google and GitHub social login

Implement search and filter for coffee products

Add pagination for coffee list

Create user dashboard with order history

Implement image upload functionality

Add dark/light theme toggle

Add rating and review system for coffees

Implement shopping cart functionality

🙏 Acknowledgments
Firebase - Authentication and hosting services

MongoDB Atlas - Database hosting

Vercel - Backend hosting platform

Tailwind CSS - Utility-first CSS framework

DaisyUI - Beautiful component library

SweetAlert2 - Elegant alert dialogs

📄 License
This project is under the MIT License.

👨‍💻 Author
Mehedi Polash

GitHub: @mehedipolash

Project Repository: coffee-management-client

🔗 Related Links
Backend Repository: coffee-management-server

Live Frontend: https://coffee-store-app-77cb4.web.app

Live Backend: https://coffee-management-server.vercel.app
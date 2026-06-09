# 🎉 EventHub

EventHub is a full-stack event management platform that allows users to discover, create, and manage events in one place. Built using the MERN stack, the project focuses on providing a seamless experience for event organizers and attendees.

## 🚀 Features

### User Features
- User registration and login
- Secure authentication using JWT
- Browse available events
- View event details
- Register for events
- Responsive user interface

### Organizer Features
- Organizer authentication
- Create new events
- Update event information
- Manage event registrations
- View organizer-specific events

### Security
- Password hashing with bcrypt
- JWT-based authentication
- Protected routes
- Role-based access control

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Axios
- React Router
- CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs

---

## 📂 Project Structure

```bash
EventHub/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── api/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/eventhub.git
cd eventhub
```

---

### 2. Backend Setup

Navigate to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm run dev
```

---

### 3. Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm run dev
```

Frontend URL:

```bash
http://localhost:5173
```

---

## 🔑 Authentication Endpoints

### Register User

```http
POST /api/auth/register
```

Request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "user"
}
```

---

### Login

```http
POST /api/auth/login
```

Request:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "token": "jwt_token"
}
```

---

## 📌 Core Functionalities

- User Authentication
- Organizer Authentication
- Event Creation
- Event Management
- Protected API Routes
- Role-Based Access Control
- MongoDB Database Integration
- RESTful API Design

---

## 📈 Future Enhancements

- Event image uploads
- Event categories and filters
- Search functionality
- Email notifications
- QR-code based event check-in
- Payment gateway integration
- Event analytics dashboard
- Admin panel

---

## 🎯 Learning Outcomes

Through this project, I gained experience in:

- Full-Stack MERN Development
- Authentication & Authorization
- REST API Design
- MongoDB Database Modeling
- React State Management
- Frontend–Backend Integration
- Secure Web Application Development
- Git & GitHub Collaboration

---

## 📸 Project Status

🚧 Currently under active development.

Completed:
- Backend setup
- MongoDB integration
- JWT authentication
- User and organizer role system
- API testing

In Progress:
- Frontend user interface
- Event management dashboard
- Event registration workflow

---

## 👩‍💻 Author

**Niharika K Thilak**

Computer Science Student passionate about building technology, solving real-world problems, and creating impactful digital products.

---

⭐ If you found this project interesting, consider giving it a star!

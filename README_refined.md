# TheTrendyClub E-Commerce Platform 🛍️

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-brightgreen.svg)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)

A modern full-stack e-commerce platform with customer storefront, admin dashboard, and REST API. Built with React, Node.js, Express, and MongoDB.

## 🌟 Live Demo

- **Customer Store:** [https://thetrendyclub-frontend.vercel.app/](https://thetrendyclub-frontend.vercel.app/)
- **Admin Dashboard:** [https://thetrendyclub-admin.vercel.app/](https://thetrendyclub-admin.vercel.app/)
- **Backend API:** [https://thetrendyclub-backend.vercel.app/](https://thetrendyclub-backend.vercel.app/)

## ✨ Key Features

### 🛒 Customer Features

- Product browsing with advanced filtering and search
- Shopping cart and wishlist functionality
- User authentication and profile management
- Multiple payment options (COD, Stripe)
- Order tracking and history
- Mobile-responsive design

### 👨‍💼 Admin Features

- Secure admin authentication
- Product management (CRUD operations)
- Order processing and status updates
- User management and analytics
- Mobile-responsive admin interface

### 🚀 Backend Features

- RESTful API with Express.js
- JWT authentication for users and admin
- MongoDB database with Mongoose ODM
- Cloudinary integration for image storage
- Stripe payment processing
- Comprehensive error handling and validation

## 🛠️ Tech Stack

**Frontend:** React 18.2.0, Vite, Tailwind CSS, React Router, Axios, React Toastify, Lucide React  
**Backend:** Node.js 18+, Express.js, MongoDB, Mongoose, JWT, bcryptjs, Multer  
**Cloud Services:** Cloudinary (images), Stripe (payments), Vercel (deployment)  
**Development:** ES6+, Mobile-first design, PWA support, Code splitting

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+), MongoDB, Cloudinary account, Stripe account

### Environment Setup

Create `.env` files in each directory:

**Backend (`backend/.env`):**

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@thetrendyclub.com
ADMIN_PASSWORD=your_admin_password
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET_KEY=your_api_secret
STRIPE_SECRET_KEY=your_stripe_secret
PORT=4000
```

**Frontend & Admin (`.env`):**

```env
VITE_BACKEND_URL=http://localhost:4000
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

### Installation

```bash
# Clone repository
git clone https://github.com/hangsheng0625/e-commernce.git
cd TheTrendyClub

# Backend
cd backend && npm install && npm run server

# Frontend (new terminal)
cd frontend && npm install && npm run dev

# Admin (new terminal)
cd admin && npm install && npm run dev
```

**Local URLs:**

- Frontend: http://localhost:3000
- Admin: http://localhost:3001
- Backend: http://localhost:4000

## 🚀 Deployment

Deploy to Vercel:

```bash
# Each directory separately
cd backend && vercel --prod
cd frontend && vercel --prod
cd admin && vercel --prod
```

## 📄 License

MIT License - Educational and portfolio use encouraged.

## 👥 Contributors

**Project Lead:** [hangsheng0625](https://github.com/hangsheng0625)  
**Repository:** [e-commernce](https://github.com/hangsheng0625/e-commernce)

---

⭐ **Star this repo if you found it helpful!**

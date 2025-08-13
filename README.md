# TheTrendyClub E-Commerce Platform 🛍️

<<<<<<< HEAD
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-brightgreen.svg)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)

A modern full-stack e-commerce platform with customer storefront, admin dashboard, and REST API. Built with React, Node.js, Express, and MongoDB.
=======
TheTrendyClub is a comprehensive full-stack e-commerce web application featuring a modern customer-facing storefront, sophisticated admin dashboard, and robust backend API. Built with cutting-edge technologies including React, Node.js, Express, and MongoDB, this platform delivers a seamless shopping experience with professional-grade features.
>>>>>>> 1ef9f8dabe852fffe0cf8dc4acbddd2c8ade7a73

## 🌟 Live Demo

- **Customer Store:** [https://thetrendyclub-frontend.vercel.app/](https://thetrendyclub-frontend.vercel.app/)
- **Admin Dashboard:** [https://thetrendyclub-admin.vercel.app/](https://thetrendyclub-admin.vercel.app/)
- **Backend API:** [https://thetrendyclub-backend.vercel.app/](https://thetrendyclub-backend.vercel.app/)

## ✨ Key Features

### 🛒 Customer Features

<<<<<<< HEAD
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
=======
## ✨ Features & Capabilities

### 🛒 Customer Frontend (`frontend/`)
- **🔍 Product Discovery**
  - Advanced filtering by category, subcategory, price range, and search
  - Professional product galleries with zoom functionality
  - Size and color variant selection
  - Related products recommendations

- **🛒 Shopping Experience**
  - Intuitive shopping cart with quantity management
  - Real-time price calculations and discounts
  - Wishlist functionality for favorite products
  - Guest checkout and registered user benefits

- **👤 User Management**
  - Secure user registration and authentication
  - JWT-based session management
  - User profile management with order history
  - Address book for quick checkout

- **💳 Order Management**
  - Multiple payment options (Cash on Delivery, Stripe integration)
  - Order tracking with real-time status updates
  - Email notifications for order confirmations
  - Order history and reorder functionality

- **📱 Mobile-First Design**
  - Fully responsive layout with Tailwind CSS
  - Touch-optimized interface for mobile devices
  - Progressive Web App (PWA) features
  - Fast loading with Vite optimization

### 👨‍💼 Admin Dashboard (`admin/`)
- **🔐 Secure Access Control**
  - Admin-only authentication system
  - Role-based access control
  - Session management with automatic logout

- **📦 Product Management**
  - Intuitive product creation form with image uploads
  - Bulk product operations (edit, delete, duplicate)
  - Inventory tracking and low-stock alerts
  - Category and subcategory management

- **📊 Order Processing**
  - Comprehensive order dashboard with filtering
  - Order status management (pending, processing, shipped, delivered)
  - Customer information and order details view
  - Bulk order status updates

- **📈 Analytics & Reporting**
  - Sales analytics and revenue tracking
  - Popular products and customer insights
  - Order trends and performance metrics
  - Export functionality for reports

- **🎨 Modern UI/UX**
  - Professional glassmorphism design
  - Mobile-responsive admin interface
  - Lucide React icons for consistency
  - Dark/light theme support

### 🚀 Backend API (`backend/`)
- **🔧 RESTful Architecture**
  - Clean API design following REST principles
  - Comprehensive error handling and validation
  - Rate limiting and security middleware
  - API documentation with Swagger (optional)

- **🔒 Security Features**
  - JWT-based authentication for users and admin
  - Password hashing with bcrypt
  - CORS configuration for cross-origin requests
  - Input sanitization and validation

- **💾 Database Management**
  - MongoDB with Mongoose ODM
  - Optimized queries and indexing
  - Data validation and schema enforcement
  - Automatic backup and recovery options

- **☁️ Cloud Integration**
  - Cloudinary for image storage and optimization
  - Stripe for secure payment processing
  - Vercel deployment for scalability
  - Environment-based configuration

### 🔧 Environment Configuration

#### Backend Environment Variables (`backend/.env`)
Create a `.env` file in the `backend/` directory with the following variables:

```env
# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/thetrendyclub

# Authentication
JWT_SECRET=your_super_secure_jwt_secret_key_here
ADMIN_EMAIL=admin@thetrendyclub.com
ADMIN_PASSWORD=your_secure_admin_password

# Cloudinary Configuration (Image Storage)
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET_KEY=your_cloudinary_api_secret

# Stripe Configuration (Payment Processing)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key

# Server Configuration
PORT=4000
NODE_ENV=development
```

#### Frontend Environment Variables (`frontend/.env`)
```env
# Backend API URL
VITE_BACKEND_URL=http://localhost:5173
# For production: https://thetrendyclub-backend.vercel.app

# Stripe Public Key (for payment forms)
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
```

#### Admin Environment Variables (`admin/.env`)
```env
# Backend API URL
VITE_BACKEND_URL=http://localhost:5174
# For production: https://thetrendyclub-backend.vercel.app
```

### 💻 Installation & Development Setup

#### 🔄 Quick Start (All Services)
```bash
# Clone the repository
git clone https://github.com/hangsheng0625/e-commernce.git
cd TheTrendyClub

# Install all dependencies
npm run install-all  # If available, or install individually
```

#### 1️⃣ Backend API Server
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start development server
npm run server
```

#### 2️⃣ Customer Frontend
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

#### 3️⃣ Admin Dashboard
```bash
# Navigate to admin directory
cd admin

# Install dependencies
npm install

# Start development server
npm run dev
````
>>>>>>> 1ef9f8dabe852fffe0cf8dc4acbddd2c8ade7a73

## 🛠️ Tech Stack

**Frontend:** React 18.2.0, Vite, Tailwind CSS, React Router, Axios, React Toastify, Lucide React  
**Backend:** Node.js 18+, Express.js, MongoDB, Mongoose, JWT, bcryptjs, Multer  
**Cloud Services:** Cloudinary (images), Stripe (payments), Vercel (deployment)  
**Development:** ES6+, Mobile-first design, PWA support, Code splitting

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+), MongoDB, Cloudinary account, Stripe account

### Environment Setup

<<<<<<< HEAD
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
=======
## 🔮 Future Enhancements

- [ ] **Advanced Search:** Elasticsearch integration for better search
- [ ] **Reviews & Ratings:** Product review system
- [ ] **Multi-language Support:** Internationalization (i18n)
- [ ] **Advanced Analytics:** Detailed sales and user analytics
- [ ] **Mobile App:** React Native mobile application
- [ ] **Real-time Chat:** Customer support chat system
- [ ] **AI Recommendations:** Machine learning product recommendations
>>>>>>> 1ef9f8dabe852fffe0cf8dc4acbddd2c8ade7a73

---

⭐ **Star this repo if you found it helpful!**

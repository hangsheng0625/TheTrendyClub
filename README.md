# TheTrendyClub E-Commerce Platform 🛍️

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-brightgreen.svg)](https://www.mongodb.com/)

TheTrendyClub is a comprehensive full-stack e-commerce web application featuring a modern customer-facing storefront, sophisticated admin dashboard, and robust backend API. Built with cutting-edge technologies including React, Node.js, Express, and MongoDB, this platform delivers a seamless shopping experience with professional-grade features.

## 🌟 Live Demo

- **🛒 Customer Store:** [https://thetrendyclub-frontend.vercel.app/](https://thetrendyclub-frontend.vercel.app/)
- **⚡ Backend API:** [https://thetrendyclub-backend.vercel.app/](https://thetrendyclub-backend.vercel.app/)
- **👨‍💼 Admin Dashboard:** [https://thetrendyclub-admin.vercel.app/](https://thetrendyclub-admin.vercel.app/)

## 📁 Project Architecture

```
TheTrendyClub/
├── 🎨 admin/           # Admin Dashboard (React + Vite + Tailwind)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── Login.jsx   # Admin authentication component
│   │   │   ├── Navbar.jsx  # Navigation header with mobile responsiveness
│   │   │   └── Sidebar.jsx # Navigation drawer with admin profile
│   │   ├── pages/          # Main application pages
│   │   │   ├── Add.jsx     # Product creation form
│   │   │   ├── List.jsx    # Product management interface
│   │   │   └── Orders.jsx  # Order management dashboard
│   │   └── assets/         # Static assets and images
│   └── package.json        # Dependencies and scripts
│
├── 🚀 backend/         # RESTful API Server (Node.js + Express + MongoDB)
│   ├── config/             # Configuration files
│   │   ├── cloudinary.js   # Image upload configuration
│   │   └── mongodb.js      # Database connection setup
│   ├── controllers/        # Business logic handlers
│   │   ├── cartController.js    # Shopping cart operations
│   │   ├── orderController.js   # Order processing logic
│   │   ├── productController.js # Product CRUD operations
│   │   └── userController.js    # User authentication & management
│   ├── middleware/         # Custom middleware functions
│   │   ├── adminAuth.js    # Admin authorization middleware
│   │   ├── auth.js         # User authentication middleware
│   │   └── multer.js       # File upload handling
│   ├── models/             # MongoDB data schemas
│   │   ├── orderModel.js   # Order data structure
│   │   ├── productModel.js # Product data structure
│   │   └── userModel.js    # User data structure
│   └── routes/             # API endpoint definitions
│       ├── cartRoute.js    # Cart management endpoints
│       ├── orderRoute.js   # Order processing endpoints
│       ├── productRoute.js # Product CRUD endpoints
│       └── userRoute.js    # User authentication endpoints
│
├── 🛍️ frontend/        # Customer-Facing Store (React + Vite + Tailwind)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # React Context for state management
│   │   ├── pages/          # Customer-facing pages
│   │   └── assets/         # Product images and UI assets
│   └── package.json        # Dependencies and scripts
│
└── 📝 README.md        # Project documentation
```

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

## 🚀 Getting Started

### 📋 Prerequisites
- **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** instance (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **Cloudinary** account for image management - [Sign up here](https://cloudinary.com/)
- **Stripe** account for payment processing - [Sign up here](https://stripe.com/)
- **Git** for version control - [Download here](https://git-scm.com/)

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
VITE_BACKEND_URL=http://localhost:4000
# For production: https://thetrendyclub-backend.vercel.app

# Stripe Public Key (for payment forms)
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
```

#### Admin Environment Variables (`admin/.env`)
```env
# Backend API URL
VITE_BACKEND_URL=http://localhost:4000
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
# Server will start at http://localhost:4000

# Alternative commands:
npm run dev     # Development with nodemon
npm start       # Production server
```

#### 2️⃣ Customer Frontend
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
# Application will start at http://localhost:3000

# Build for production
npm run build
npm run preview  # Preview production build
```

#### 3️⃣ Admin Dashboard
```bash
# Navigate to admin directory
cd admin

# Install dependencies
npm install

# Start development server
npm run dev
# Admin dashboard will start at http://localhost:3001

# Build for production
npm run build
npm run preview  # Preview production build

## 🌐 Usage & Access

**Features Available:**
- Browse products by categories
- Search and filter functionality
- Add products to cart and wishlist
- User registration and login
- Secure checkout process
- Order tracking and history

**Admin Features:**
- Product management (add, edit, delete)
- Order processing and status updates
- User management and analytics
- Inventory tracking

**API Documentation:**
- Health Check: `GET /api/health`
- Products: `GET /api/products`
- Users: `POST /api/users/register`
- Orders: `GET /api/orders` (requires authentication)

### Performance Optimization
- Images are optimized through Cloudinary
- Code splitting implemented with React.lazy()
- MongoDB queries are indexed for optimal performance
- Caching strategies implemented for static assets

## 🛠️ Tech Stack

### 🎨 Frontend Technologies
- **⚛️ React 18.2.0** - Modern UI library with hooks and context
- **⚡ Vite 5.0+** - Lightning-fast build tool and dev server
- **🎨 Tailwind CSS 3.4+** - Utility-first CSS framework
- **🧭 React Router DOM 6.8+** - Client-side routing and navigation
- **📡 Axios 1.6+** - Promise-based HTTP client for API calls
- **🔔 React Toastify 9.1+** - Toast notifications for user feedback
- **🎯 Lucide React 0.263+** - Beautiful and consistent icon library
- **📱 PWA Support** - Progressive Web App capabilities

### 🚀 Backend Technologies
- **🟢 Node.js 18+** - JavaScript runtime environment
- **🚂 Express.js 4.18+** - Fast and minimalist web framework
- **🍃 MongoDB 6.0+** - NoSQL document database
- **🦫 Mongoose 7.5+** - MongoDB object modeling for Node.js
- **🔐 JWT (jsonwebtoken 9.0+)** - Secure token-based authentication
- **🔒 bcryptjs 2.4+** - Password hashing and salting
- **📁 Multer 1.4+** - Middleware for handling multipart/form-data
- **☁️ Cloudinary 1.40+** - Cloud-based image and video management
- **💳 Stripe 13.0+** - Payment processing platform
- **🛡️ CORS 2.8+** - Cross-Origin Resource Sharing middleware
- **✅ Validator 13.11+** - String validation and sanitization

### 🗄️ Database & Storage
- **📊 MongoDB Atlas** - Cloud-hosted MongoDB service
- **☁️ Cloudinary** - Image storage and optimization
- **🔐 JWT Tokens** - Stateless authentication storage

### 🚀 Deployment & DevOps
- **▲ Vercel** - Serverless deployment platform
- **🌍 CDN Integration** - Global content delivery
- **🔧 Environment Variables** - Secure configuration management
- **📦 NPM/Yarn** - Package management

### 🎨 UI/UX Design
- **🎨 Tailwind CSS** - Responsive utility-first styling
- **📱 Mobile-First Design** - Progressive enhancement approach
- **🪟 Glassmorphism Effects** - Modern visual design trends
- **🎯 Lucide Icons** - Consistent iconography system
- **⚡ Optimized Images** - WebP format with fallbacks

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Vercel** for seamless deployment platform
- **MongoDB** for the flexible NoSQL database
- **Stripe** for secure payment processing
- **Cloudinary** for image management services

## 🔮 Future Enhancements

- [ ] **Advanced Search:** Elasticsearch integration for better search
- [ ] **Reviews & Ratings:** Product review system
- [ ] **Wishlist Sharing:** Social sharing of wishlists
- [ ] **Multi-language Support:** Internationalization (i18n)
- [ ] **Advanced Analytics:** Detailed sales and user analytics
- [ ] **Mobile App:** React Native mobile application
- [ ] **Real-time Chat:** Customer support chat system
- [ ] **AI Recommendations:** Machine learning product recommendations

---


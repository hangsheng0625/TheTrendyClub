# Wearify E-Commerce Platform

Wearify is a full-stack e-commerce web application featuring a customer-facing storefront and an admin dashboard for product and order management. The project is built with a modern tech stack including React, Node.js, Express, and MongoDB.

## Project Structure

```
.
├── admin/      # Admin dashboard (React + Vite)
├── backend/    # Backend API (Node.js + Express + MongoDB)
├── frontend/   # Customer-facing frontend (React + Vite)
└── .gitignore
```

## Features

### Customer Frontend (`frontend/`)
- Browse products by category, subcategory, and search
- Product details with images, sizes, and add to cart
- Shopping cart with quantity management
- User authentication (login/register)
- Place orders with address and payment method (COD, Stripe, Razorpay)
- View and track order status
- Responsive design with Tailwind CSS

### Admin Dashboard (`admin/`)
- Secure admin login
- Add new products with images, details, and sizes
- List and remove products
- View all orders and update order status
- Manage inventory and order fulfillment

### Backend API (`backend/`)
- RESTful API built with Express.js
- MongoDB for data storage (users, products, orders)
- JWT-based authentication for users and admin
- File uploads for product images (Cloudinary integration)
- Order management and payment integration (Stripe, Razorpay)
- Cart management per user

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)
- Cloudinary account (for image uploads)
- Stripe and Razorpay accounts (for payment integration)

### Environment Variables

Create `.env` files in `backend/`, `frontend/`, and `admin/` as needed. Example for `backend/.env`:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET_KEY=your_cloudinary_api_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password
STRIPE_SECRET_KEY=your_stripe_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
PORT=4000
```

Set `VITE_BACKEND_URL` in both `frontend/.env` and `admin/.env` to point to your backend API, e.g.:
```
VITE_BACKEND_URL=http://localhost:4000
```

### Installation

#### 1. Backend
```
cd backend
npm install
npm run server
```

#### 2. Frontend (Customer)
```
cd frontend
npm install
npm run dev
```

#### 3. Admin Dashboard
```
cd admin
npm install
npm run dev
```

### Usage

- Visit the customer site at [http://localhost:5173](http://localhost:5173)
- Visit the admin dashboard at [http://localhost:5174](http://localhost:5174)
- The backend runs on [http://localhost:4000](http://localhost:4000) by default

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Axios, React Router, React Toastify
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, Multer, Cloudinary, Tng, FPX (online banking)
- **Admin:** React, Vite, Tailwind CSS



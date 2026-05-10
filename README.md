# 🍅 Food Delivery Platform

A full-stack MERN Food Delivery application with separate **Frontend**, **Admin Panel**, and **Backend API** deployments.  
Users can browse food items, manage cart, place orders, and simulate online payments, while admins can manage food items and orders.

---

# 🚀 Live Demo

## 🌐 Frontend
https://food-delivery-frontend-7p20.onrender.com/

## 🛠️ Admin Panel
https://food-delivery-admin-8u0k.onrender.com/

## ⚙️ Backend API
https://food-delivery-backend-ou0u.onrender.com/

---

# 📌 Features

## 👤 User Features
- User Authentication (Signup/Login)
- Browse Food Menu
- Filter Food Categories
- Add to Cart
- Update Cart Quantity
- Place Orders
- Order Verification
- Responsive UI
- Mobile Friendly Design

## 🛠️ Admin Features
- Add New Food Items
- Upload Food Images
- View Food List
- Remove Food Items
- Manage Orders
- Update Order Status

---

# ⚙️ How This Project Works

## 🔹 User Flow

1. Users visit the frontend application.
2. Food items are fetched from the backend API.
3. Users can:
   - Browse menu items
   - Filter categories
   - Add items to cart
4. Cart data is stored and updated dynamically.
5. Users can place orders through the checkout page.
6. Order details are stored in MongoDB.
7. Payment verification is simulated using Stripe test integration.
8. Users can track their orders from the **My Orders** section.

---

## 🔹 Admin Flow

1. Admin accesses the admin dashboard.
2. Admin can:
   - Add new food items
   - Upload images
   - Remove food items
   - View all orders
3. Order status can be updated dynamically.
4. All changes are reflected instantly in the frontend application.

---

## 🔹 Backend Flow

The backend API handles:
- Authentication
- Food item management
- Cart management
- Order management
- Database operations
- Image uploads

MongoDB Atlas is used as the cloud database to store:
- Users
- Food Items
- Cart Data
- Orders

---

# 🧰 Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer

## Deployment
- Render
- MongoDB Atlas
- GitHub

---

# 📂 Project Structure

```bash
Food_Delivery/
│
├── frontend/        # User Application
├── admin/           # Admin Dashboard
├── backend/         # Backend API
│
└── README.md
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the `backend` folder and add:

```env
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key
MONGO_URI=your_mongodb_connection
PORT=4000
```

---

# 🛠️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/sunilkumar1701/Food_Delivery.git
cd Food_Delivery
```

---

## 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run server
```

---

## 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 4️⃣ Admin Panel Setup

```bash
cd admin
npm install
npm run dev
```

---

# 🌍 Deployment

The application is deployed using:

- Render (Frontend, Admin, Backend)
- MongoDB Atlas (Database)
- GitHub (Version Control)

---

# 📸 Screenshots

## 🏠 Home Page
- Modern responsive food ordering UI
- <img width="1918" height="990" alt="image" src="https://github.com/user-attachments/assets/26c8c060-405e-4497-a377-6e896231efc0" />

- <img width="1918" height="995" alt="image" src="https://github.com/user-attachments/assets/570ec36d-b865-485d-8eaf-2d0fcbfc6d59" />


## 🛒 Cart Page
- Dynamic cart management
- <img width="1918" height="802" alt="image" src="https://github.com/user-attachments/assets/2c04789a-fb43-40db-b6d4-de519f17b45e" />


## 🛠️ Admin Dashboard
- Add / Remove food items
- Manage orders
- <img width="1918" height="990" alt="image" src="https://github.com/user-attachments/assets/81cb12fc-addb-483d-a2e5-89c9c1075122" />

- <img width="1918" height="1048" alt="image" src="https://github.com/user-attachments/assets/e1ac0967-c72d-4649-94f3-555d8b53c479" />


---

# 🔐 Authentication

- JWT Based Authentication
- Secure API Routes
- Protected User Sessions

---

# 📈 Future Improvements

- Real Payment Gateway Integration
- Email Notifications
- Order Tracking
- Dark Mode
- Wishlist Feature
- Razorpay / Stripe Live Payments

---

# 👨‍💻 Author

## Sunil Kumar P

- MERN Stack Developer
- Passionate about Full Stack Development & Scalable Web Apps

### 🔗 Connect With Me

GitHub:
https://github.com/sunilkumar1701

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub!

# 🛍️ Modern Clothing E-Commerce Platform

A full-stack clothing e-commerce web application built using **React, Flask, and SQLAlchemy**.  
Users can browse collections, filter products, manage favorites, and simulate cart functionality.

---

## 🚀 Live Features

- Product catalogue with category filters
- Price range filtering
- Size and color filtering
- Favorites system
- Cart management (local storage)
- Responsive modern UI
- RESTful API backend
- SQLite database with relational models
- CLI data seeding

---

## 🏗️ Tech Stack

### Frontend
- React
- React Router
- Context API (Global State Management)
- Bootstrap
- Webpack

### Backend
- Python
- Flask
- Flask-SQLAlchemy
- Flask-Migrate
- SQLite

### Dev Tools
- Git & GitHub
- GitHub Desktop
- CLI seed commands

---

## 📂 Project Structure

```

ecommerce-python-main/
│
├── src/
│   ├── api/
│   │   ├── models.py
│   │   ├── routes.py
│   │   ├── commands.py
│   │
│   ├── front/
│   │   ├── pages/
│   │   ├── component/
│   │   ├── store/
│   │
│   └── app.py
│
├── migrations/
├── package.json
├── requirements.txt
└── README.md

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
````

---

### 2️⃣ Backend Setup

Create virtual environment:

```bash
python -m venv venv
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create database:

```bash
flask db upgrade
```

Seed clothing data:

```bash
flask seed-clothing
```

Run backend:

```bash
python -m flask run --port=3001
```

Backend runs at:

```
http://127.0.0.1:3001
```

---

### 3️⃣ Frontend Setup

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

## 🧠 Database Design

The system includes relational models:

* User
* Product
* Collection
* Size
* Color
* Stock
* Favorites
* Order

Products are connected to:

* Multiple collections
* Multiple sizes
* Multiple colors via stock table

This structure ensures scalability and normalized data modeling.

---

## 🛒 Key Functionalities

### Product Filtering

Users can filter by:

* Category
* Price range
* Size
* Color

### Favorites

Authenticated users can:

* Add products to favorites
* Remove favorites
* View favorite list

### Cart

* Stored locally
* Quantity control
* Dynamic subtotal calculation

---

## 📸 UI Highlights

* Clean modern clothing design
* Product image cards
* Hover zoom effect
* Responsive layout
* Dynamic catalogue banner

---

## 🔐 Environment Variables

Create a `.env` file:

```
DATABASE_URL=sqlite:///test.db
FLASK_APP=src/app.py
FLASK_ENV=development
BACKEND_URL=http://localhost:3001
```

---

## 🎯 Interview-Ready Improvements

Possible extensions:

* JWT authentication
* Admin dashboard
* Order history
* Stripe integration
* Inventory validation
* Unit tests
* Docker deployment

---

## 🧩 Design Principles

* Separation of concerns (frontend/backend)
* RESTful architecture
* Relational data modeling
* Context API for predictable state management
* Modular reusable components

---

## 📌 Future Improvements

* Pagination
* Search functionality
* Product reviews
* Wishlist persistence
* Deployment on Render/Vercel

---

## 👩‍💻 Author

**Ananya Dua**
---

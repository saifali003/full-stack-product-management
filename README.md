# Product Management System

A full-stack Product Management System built using the MERN Stack. Users can add, view, update, and delete products through a clean and responsive interface.

## Features

- Add new products
- View all products
- Update existing products
- Delete products
- Responsive UI
- MongoDB database integration
- RESTful API architecture
- Frontend and Backend deployed on Render

## Tech Stack

### Frontend
- React.js
- Axios
- Tailwind CSS
- React Router DOM

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose


```

## API Endpoints

### Add Product

```http
POST /api/product/add
```

### Get All Products

```http
GET /api/product/all
```

### Update Product

```http
PUT /api/product/:id
```

### Delete Product

```http
DELETE /api/product/:id
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=4000
```

Run Backend:

```bash
npm start
```

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

## Deployment

### Frontend

Deployed on Render

### Backend

Deployed on Render

## Live Demo

Frontend:
https://full-stack-product-management-frontened.onrender.com

Backend:
https://full-stack-product-management.onrender.com

cs


This project is open source and available under the MIT License.

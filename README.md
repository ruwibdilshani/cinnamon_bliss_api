# Cinnamon Bliss - Backend

## Project Overview
 This README provides setup and execution instructions for the **backend** of the project, which is built using Node.js, Express.js, Prisma ORM, and JWT authentication.

## Features
- RESTful API with Express.js
- Database integration using Prisma ORM
- Secure authentication with JWT
- Order management and tracking
- Stripe payment integration

## Prerequisites
Ensure you have the following installed on your system:
- Node.js (>= 16.x)
- PostgreSQL / MySQL (or another supported database)
- npm or yarn

## Installation and Setup

### 1. Clone the Repository
```sh
git clone (https://github.com/ruwibdilshani/cinnamon_bliss_api.git)
cd cinnamon-bliss/server
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the `server` directory and add the following:
```
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
STRIPE_SECRET=your_stripe_secret
PORT=5000
```

### 4. Run Database Migrations
```sh
npx prisma migrate dev --name init
```

### 5. Start the Backend Server
```sh
npm run dev
```
The server will run at `http://localhost:5000`.

## API Endpoints

#### https://documenter.getpostman.com/view/36641894/2sAYdfqrHE

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate and get a token

### Orders
- `POST /api/orders` - Create a new order
- `GET /api/orders/:id` - Get order details
- `GET /api/orders/user/:userId` - Get user order history

## Running the Application
1. Ensure the database is set up and running.
2. Start the backend using `npm run dev`.
3. The API will be available at `http://localhost:5000`.

## Deployment
For deployment, configure environment variables properly and use:
- **Backend**: Render / Railway / Heroku
- **Database**: Supabase / PlanetScale / Railway

## License
This project is licensed under the MIT License.


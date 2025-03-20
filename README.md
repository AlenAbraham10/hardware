# TechShop - Computer and Mobile Shop Website

A full-stack e-commerce website for buying computers, mobile devices, and repair services. Built with React.js and Node.js/Express.

## Features

- Product browsing and filtering
- Shopping cart functionality
- User authentication
- Service booking system
- Order tracking
- Profile management

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tech-shop
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd client
npm install
```

4. Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

## Running the Application

1. Start the backend server:
```bash
# From the root directory
npm run server
```

2. Start the frontend development server:
```bash
# From the client directory
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Project Structure

```
tech-shop/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   └── App.js        # Main application component
│   └── package.json
├── models/                # MongoDB models
├── routes/               # API routes
├── server.js             # Backend server
└── package.json
```

## Technologies Used

### Frontend
- React.js
- Material-UI
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. 
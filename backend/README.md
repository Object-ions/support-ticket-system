# Backend for MERN Application

### By Moses Atia

## Description

This README provides an overview of the backend services for the MERN application.

## File Structure

Below is the directory structure of our backend, providing a clear overview of the components and their organization:

```
/backend
    /middleware
        authMiddleware.js       # Handles authentication and token verification
        errorMiddleware.js      # Manages API errors
    /config
        db.js                   # Database configuration settings
    server.js                   # Entry point of the backend server
    /models
        userModel.js            # Schema for user data
    /controllers
        userController.js       # Business logic for user-related operations
    /routes
        userRoutes.js           # Defines routes related to user operations
    README.md                   # Backend documentation
```

## Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Tokens

## Setup and Installation

1. Clone this repository
2. change directory to the backend directory

```bash
   cd backend
```

3. Install dependencies:

```bash
npm install
```

4. Configure environment variables:
   create a '.env' file with the following variables:

```bash
NODE_ENV = development
PORT = < Your port here >
MONGO_URI = < MongoDB urI here >
JWT_SECRET = < JWT secret >
```

5. Start the server:
   ```bash
   npm start
   ```

## Features

### Authentication API

The backend provides a complete authentication API with the following capabilities:

- User Registration: Registers a new user and encrypts the password for security.
- User Login: Authenticates the user and returns a JWT for accessing protected routes.
- Access Protected Routes: Uses JWT for authenticating requests to protected endpoints.
- Get User Data: Retrieves data of the currently logged in user based on the provided token.

## API Endpoints

The following endpoints are available for user management and authentication:

- `POST /api/users`: Register a new user.
- `POST /api/users/login`: Authenticate a user and return a token.
- `GET /api/users/me`: Retrieve the profile of the currently logged in user. Requires token.

## License

MIT License

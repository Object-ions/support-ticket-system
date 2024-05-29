# Support Ticket System

### by Moses Atia Poston

This project is a MERN stack application with authentication, where users can create support tickets and add notes to them. The system includes features for creating new tickets, viewing existing tickets, and updating ticket statuses.

## Live Demo

This web application deployed with Heroku (www.heroku.com) - you can view a live demo [here](https://supportdeskappmosesa-728926f0cf29.herokuapp.com/)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication with JWT
- Create, view, and close support tickets
- Add notes to tickets
- View status of tickets (open or closed)
- Private routes for authenticated users

## Installation

### Prerequisites

- Node.js
- MongoDB Atlas or a local MongoDB server

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/Object-ions/support-ticket-system.git
   cd support-ticket-system
   ```
2. Install backend dependencies:
   ```sh
   npm install
   ```
3. Set up your environment variables. Create a `.env` file in the root directory and add the following:

   ```env
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV = development
   PORT = 4000 || your_port

   ```

4. Start the backend server:
   ```sh
   npm run server
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install frontend dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm start
   ```

### Running Both Servers Concurrently

From the root directory:

```sh
npm run dev
```

## Usage

1. Register and log in to the application.
2. Create new support tickets by filling out the form.
3. View your existing tickets and their statuses.
4. Add notes to your tickets for further details.
5. Close tickets when the issue is resolved.

## Technologies

### Frontend:

- React
- Redux & Redux Toolkit
- React Router
- Axios
- React Icons
- React Modal
- React Toastify

### Backend:

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- Bcryptjs
- Express Async Handler

## License

Distributed under the MIT License. See `LICENSE` for more information.

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2024 Moshe Atia Poston.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### contact

If you detect any bug in the program, please reach out to me at [moshikoatia@gmail.com](mailto:moshikoatia@gmail.com).

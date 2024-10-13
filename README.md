# Task Management API

This is a Task Management API built using **Node.js** and **TypeScript**. It provides user authentication, task management (CRUD operations), filtering, sorting, pagination, and more. The API follows modern security and best practices, including JWT authentication, input validation, and error handling.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [API Endpoints](#api-endpoints)
  - [Authentication Routes](#authentication-routes)
  - [Task Routes](#task-routes)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **User Authentication**: Sign up, log in, and JWT-based authentication.
- **Task Management**: Create, read, update, and delete tasks.
- **Filtering and Sorting**: Filter tasks by status, priority, or due date; sort tasks by creation or due date.
- **Pagination**: Support for paginated task listings.
- **Role-based Access Control**: Different access rights for admin and regular users.
- **File Uploads** (Optional): Attach files to tasks.
- **Security**: Rate limiting, input sanitization, secure HTTP headers, and password hashing.
- **Error Handling**: Centralized error handling and validation.
- **Testing**: Unit and integration tests with Mocha or Jest.

---

## Technologies

- **Node.js**: JavaScript runtime
- **TypeScript**: Superset of JavaScript with type checking
- **Express.js**: Web framework for Node.js
- **JWT**: JSON Web Tokens for user authentication
- **Bcrypt**: For password hashing
- **Helmet**: For security headers
- **Rate Limiting**: To prevent abuse (e.g., brute force attacks)

---

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/task-management-api.git
cd task-management-api
```

2. Install dependencies:

```bash
npm install
```

3. Set up your environment variables in a `.env` file (see [Environment Variables](#environment-variables)).

### Running the App

1. To start the development server:

```bash
npm run dev
```

This will start the server on `http://localhost:5000` by default.

2. For production builds:

```bash
npm run build
npm start
```

This will compile the TypeScript code to JavaScript and run the server.

---

## API Endpoints

### Authentication Routes

- **POST /api/auth/register** - Register a new user
- **POST /api/auth/login** - Log in and get a JWT
- **POST /api/auth/logout** - Log out the user

### Task Routes

- **GET /api/tasks** - Get all tasks (for the authenticated user)
- **POST /api/tasks** - Create a new task
- **GET /api/tasks/:id** - Get a single task by ID
- **PUT /api/tasks/:id** - Update a task by ID
- **DELETE /api/tasks/:id** - Delete a task by ID

### Additional Features

- **Filtering and Sorting**: Use query parameters like `status`, `priority`, and `dueDate`.
  - Example: `GET /api/tasks?status=pending&sort=dueDate`
- **Pagination**: Use `page` and `limit` query parameters.
  - Example: `GET /api/tasks?page=2&limit=10`

---

## Environment Variables

To run this project, you need to set up the following environment variables in a `.env` file at the root of your project:

```bash
NODE_ENV=development
PORT=5000
JWT_SECRET=your_jwt_secret_key
DB_URI=mongodb://localhost:27017/taskmanagement
```

- **NODE_ENV**: Set to `development` or `production`.
- **PORT**: The port your server will run on.
- **JWT_SECRET**: A secret key for signing JWT tokens.
- **DB_URI**: MongoDB connection string.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push the branch: `git push origin feature-name`
5. Open a pull request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Future Improvements

- Add WebSocket support for real-time task updates
- Implement caching with Redis for better performance
- Add Swagger for API documentation

---

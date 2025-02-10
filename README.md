# Employee Management System - Full Stack 🏢🔒

## Overview

The Employee Management System is a full-stack web application that allows employers to securely manage their employees, preventing unauthorized payments and fraud. The system ensures that only authorized personnel can add new employees, and each employee added is linked to the person who registered them, creating full accountability.

This project is divided into two parts:

- **FrontEnd:**- A React-based user interface for interacting with the system.
- **BackEnd:**- A Node.js and Express-based server that manages the business logic and data storage.

## Project Structure

The project is structured as follows:

   ```bash
   employee-management-system/
├── employee-management-backend/    # Backend directory
│   ├── ... (Backend files and code)
│
├── employee-management-frontend/   # Frontend directory
│   ├── ... (Frontend files and code)
└── README.md

   ```

## Current Status

Both the frontend and backend are functional but still under development. I am working on adding more features and improving both parts whenever I get the chance. Stay tuned for updates!


## Frontend

- React.js framework for building the user interface.
- Axios for making requests to the backend.
- User authentication, employee registration, and dashboard are under development.


## BackeEnd

- Node.js with Express.js for handling API requests.
- MongoDB (via Mongoose) for data storage.
- Secure employee registration and role-based access control are implemented.


## Features

# Frontend

- ✅ User Authentication – Secure login system for authorized personnel.
- ✅ Employee Registration Interface – A user-friendly form for adding new employees.
- ✅ Dashboard – An overview of employees, registration status, and user activity.
- ✅ Role-Based Access – Different views and permissions based on user roles.

# Backend

- ✅ Secure Employee Registration – Only authorized personnel can add employees.
- ✅ User Accountability – Every added employee is linked to their registrar.
- ✅ Fraud Prevention – No more paying ghost employees.
- ✅ Role-Based Access – Different levels of access for security.


## Technologies Used

# Frontend

- **React.js:** A JavaScript library for building interactive user interfaces.
- **Axios:** A promise-based HTTP client for the browser and Node.js, used for making requests to the backend.
- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.

# Backend

- **Mongoose:** A MongoDB object modeling tool designed to work in an asynchronous environment.
- **Express:** A web application framework for Node.js, designed for building web applications and APIs.
- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.

## Getting Started

# Frontend

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Yogue1997/employee-management-frontend.git
   ```

2. Install dependencies:

   ```bash
   cd employee-management-frontend
   npm install
   ```

4. Run the application:

   ```bash
   npm start
   ```
The frontend will be running locally at http://localhost:3000.

# Backend

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Yogue1997/employee-management-backend.git
   ```

2. Install dependencies:

   ```bash
   cd employee-management-backend
   npm install
   ```

3. Set up MongoDB connection:

   - Create a MongoDB database.
   - Update the MongoDB connection string in the project files where necessary.

4. Run the application:

   ```bash
   npm start
   ```

The project should now be running locally. Visit [http://localhost:8080](http://localhost:8080) in your browser to access the application.

## Future Plans

- Frontend: Integrate with the backend to securely register employees, enhance UI, and add more features.

- Backend: Expand API endpoints and integrate mobile platforms using React Native for future releases.

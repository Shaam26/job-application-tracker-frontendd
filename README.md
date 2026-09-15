# Job Application Tracker - Frontend

A responsive React frontend for managing and tracking job applications.

## Features

- User registration and login
- JWT-based authentication
- Protected routes
- Dashboard with application statistics
- View all job applications
- Search applications by company or job role
- Filter applications by status
- Add new job applications
- Edit existing applications
- Delete applications
- Job links
- Application notes
- Responsive user interface

## Tech Stack

- React.js
- JavaScript
- React Router
- HTML5
- CSS3
- Vite
- REST API
- JWT Authentication

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   └── ProtectedRoute.jsx
│
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   ├── Applications.jsx
│   ├── AddApplication.jsx
│   └── EditApplication.jsx
│
├── services/
│   └── api.js
│
├── styles/
│   ├── Navbar.css
│   ├── Auth.css
│   ├── Dashboard.css
│   ├── Applications.css
│   └── ApplicationForm.css
│
├── App.jsx
├── index.css
└── main.jsx
**
## Prerequisites**

Make sure you have the following installed:

Node.js
npm
Git

The backend Spring Boot application should also be running for the frontend API features to work.
**
## Installation**
1. Clone the repository
git clone YOUR_GITHUB_REPOSITORY_URL
2. Navigate to the project directory
cd job-application-tracker-frontend
3. Install dependencies
npm install
4. Start the development server
npm run dev

The application will start using the Vite development server.

**## Backend API**

The frontend communicates with the Spring Boot backend through REST APIs.

During local development, the backend runs at:

http://localhost:8080

## The frontend uses the following API operations:

POST   /users/register
POST   /users/login

GET    /applications
GET    /applications/{id}
POST   /applications
PUT    /applications/{id}
DELETE /applications/{id}

GET    /applications/dashboard
Authentication

The application uses JWT authentication.

## After a successful login:

The backend generates a JWT token.
The frontend stores the token in local storage.
The token is included in authenticated API requests.
Protected routes are accessible only when a token is available.
Logging out removes the token from local storage.
Search and Filtering

## The Applications page supports:

Searching by company name
Searching by job role
Filtering by application status

## Available statuses:

Applied
Interview
Rejected
Selected
Error Handling

The frontend displays backend error messages when API requests fail.

## Examples include:

Invalid login credentials
Duplicate email
Authentication required
Invalid application data
Failed API requests
Responsive Design

## The application is designed to work across:

Desktop
Tablet
Mobile devices

Responsive layouts are implemented using CSS media queries.

## Backend Repository

The frontend is designed to work with a separate Spring Boot backend.

 Backend repository:

YOUR_BACKEND_GITHUB_REPOSITORY_URL

The backend provides authentication, job application management, JWT security, validation, dashboard statistics, and PostgreSQL database integration.

## Future Improvements

Possible future enhancements include:

Pagination controls
Toast notifications
Application statistics charts
Application sorting
User profile management
Password reset
Better loading indicators
Dark mode
Production deployment
Custom domain

## Author
Shameem Banu


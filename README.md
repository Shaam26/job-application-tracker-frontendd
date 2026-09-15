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

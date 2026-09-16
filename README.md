# Job Application Tracker - Frontend

A responsive React.js frontend application for managing and tracking job applications.

This project provides a simple interface where users can create an account, log in securely, add job applications, update their application status, search and filter applications, and monitor their application statistics through a dashboard.

## Features

- User registration
- User login
- JWT-based authentication
- Protected routes
- Logout functionality
- Dashboard with application statistics
- View all job applications
- Search applications by company name or job role
- Filter applications by application status
- Add new job applications
- Edit existing job applications
- Delete job applications
- Add job links
- Add application notes
- Responsive user interface
- REST API integration
- Centralized API service

## Application Screens

### Login
Users can securely log in using their registered email and password.

### Registration
New users can create an account with their name, email, and password.

### Dashboard
The dashboard displays application statistics such as:

- Total Applications
- Applied
- Interview
- Rejected
- Selected

### Applications
Users can view all their job applications and:

- Search by company or job role
- Filter by status
- Edit applications
- Delete applications
- Open job links

### Add Application
Users can add:

- Company Name
- Job Role
- Application Date
- Status
- Job Link
- Notes

### Edit Application
Existing application details can be updated whenever the application status or other information changes.

## Tech Stack

### Frontend

- React.js
- JavaScript
- React Router
- HTML5
- CSS3
- Vite

### Backend

- Java
- Spring Boot
- Spring Data JPA
- Spring Security
- JWT
- PostgreSQL

### API Communication

- REST APIs
- JavaScript Fetch API

## Project Structure

```text
JobApplicationTrackerFrontend/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Applications.jsx
│   │   ├── AddApplication.jsx
│   │   └── EditApplication.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── Auth.css
│   │   ├── Dashboard.css
│   │   ├── Applications.css
│   │   └── ApplicationForm.css
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md


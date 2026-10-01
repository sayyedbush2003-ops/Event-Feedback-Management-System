# Event Feedback Management System

A full-stack web application developed as part of my internship project at Sysslan IT Solutions.

## Project Overview

The Event Feedback Management System allows users to submit feedback for events through a React frontend. The submitted feedback is sent to an ASP.NET Core Web API and stored in a SQL Server database.

Users can also view previously submitted feedback through the application.

## Technologies Used

### Frontend

- React
- JavaScript
- HTML
- CSS
- Vite

### Backend

- C#
- ASP.NET Core Web API
- Entity Framework Core

### Database

- Microsoft SQL Server

## Main Features

- Event feedback form
- Form validation
- Email validation
- Feedback submission
- REST API integration
- Feedback storage in SQL Server
- Retrieve and display submitted feedback
- Success and error messages
- Responsive user interface

## Application Flow

```text
React Frontend
      ↓
ASP.NET Core Web API
      ↓
Entity Framework Core
      ↓
SQL Server

API Endpoints
Get All Feedback
GET /api/feedback

Retrieves all submitted feedback from the database.

Submit Feedback
POST /api/feedback

Creates and stores a new feedback record in the database.

Project Structure
Event-Feedback-Management-System/
│
├── frontend/
│
├── backend-dotnet/
│   ├── Controllers/
│   ├── Data/
│   ├── Models/
│   ├── Migrations/
│   └── Program.cs
│
├── .gitignore
└── README.md
Internship Tasks Completed
Level 3 - Database Basics
Set up SQL Server database
Created feedback table
Stored feedback form data
Retrieved feedback records
Level 4 - Frontend & Backend Connection
Connected React frontend with backend API
Implemented feedback submission
Added success message
Retrieved feedback from backend
Added basic form validation
Level 5 - Final Touch & Review
Improved UI readability
Verified navigation
Verified database storage and retrieval
Tested complete feedback workflow
How to Run
Prerequisites
Node.js
.NET SDK
Microsoft SQL Server
Frontend
cd frontend
npm install
npm run dev
Backend
cd backend-dotnet
dotnet restore
dotnet run

The frontend and backend should be running locally.

Database

The application uses Microsoft SQL Server with Entity Framework Core.

The database is created using Entity Framework Core migrations.

Author

Bushra Sayyed
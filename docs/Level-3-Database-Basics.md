# Level 3 - Database Basics

## Objective

Set up a database to store and retrieve event feedback data.

## Tasks Completed

### Task 1 - Set Up Database

Created a Microsoft SQL Server database named `EventFeedbackDb` to store event feedback records.

### Task 2 - Create Feedback Table

Created a `Feedbacks` table using Entity Framework Core.

The table contains the following fields:

* Id
* FullName
* Email
* Event
* Rating
* Comments

### Task 3 - Save Feedback Data

Connected the ASP.NET Core Web API to SQL Server using Entity Framework Core. Feedback submitted through the application is saved in the database.

### Task 4 - Retrieve Feedback

Implemented a GET API to retrieve all feedback records from the database.

## API Endpoint

`GET /api/feedback`

## Technologies Used

* C#
* ASP.NET Core Web API
* Entity Framework Core
* Microsoft SQL Server

## Result

Successfully stored and retrieved event feedback data using SQL Server and the ASP.NET Core Web API.

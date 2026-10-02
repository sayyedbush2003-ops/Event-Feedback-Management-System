# Level 4 - Frontend & Backend Connection

## Objective

Connect the React frontend with the ASP.NET Core Web API and enable users to submit and view event feedback.

## Tasks Completed

### Task 1 - Connect Frontend to Backend

Connected the React frontend to the ASP.NET Core Web API using HTTP requests and the JavaScript `fetch()` method.

### Task 2 - Success Message

Implemented a success message that appears after feedback is submitted successfully.

### Task 3 - Retrieve and Display Feedback

Implemented a GET API request to retrieve feedback records from the backend and display them on the frontend.

### Task 4 - Basic Validation

Added form validation to ensure that:

* Required fields are not empty.
* The email address has a valid format.
* An event is selected.
* A rating is selected.
* Comments are provided.

## API Endpoints

### POST

`POST /api/feedback`

Used to submit feedback from the React frontend to the backend.

### GET

`GET /api/feedback`

Used to retrieve all submitted feedback from the backend.

## Technologies Used

* React
* JavaScript
* ASP.NET Core Web API
* C#
* REST API
* Entity Framework Core

## Result

Successfully connected the React frontend with the ASP.NET Core Web API, implemented feedback submission and retrieval, and added form validation and success messages.

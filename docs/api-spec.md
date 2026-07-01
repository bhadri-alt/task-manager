# API Specification

## Authentication

### Register User

POST /api/auth/register

Request:

{
  "name": "Bhadri",
  "email": "bhadri@gmail.com",
  "password": "123456"
}

Response:

{
  "message": "User Registered Successfully"
}

---

### Login User

POST /api/auth/login

Request:

{
  "email": "bhadri@gmail.com",
  "password": "123456"
}

Response:

{
  "token": "jwt_token_here"
}

---

## Tasks

### Get Tasks

GET /api/tasks

### Create Task

POST /api/tasks

{
  "title": "Complete Capstone Project"
}

### Update Task

PUT /api/tasks/:id

### Delete Task

DELETE /api/tasks/:id
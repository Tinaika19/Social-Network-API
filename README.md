# Social-Network-API


## Project Name: NoSQL Social Network API

### Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [System Architecture](#system-architecture)


---

## Project Overview

This project is a NoSQL-based Social Network API that allows users to share thoughts, react to friends' thoughts, and manage their friend lists. The API is built using Node.js, Express.js, and MongoDB (Mongoose ODM) and provides CRUD functionality for users, thoughts, and reactions.

### Objective:
The goal of this project is to build an API that provides a backend solution for a social network web application. This API handles user data, thoughts, and reactions, and efficiently manages relationships between users in a NoSQL database.

---

## Features

- User account creation and management (CRUD operations)
- Ability to post, update, and delete thoughts
- Users can react to other users' thoughts
- Users can add and remove friends
- Data validation using Mongoose schemas
- Thought and reaction timestamps
- Asynchronous error handling using `async/await`

---

## Technologies Used

- **Node.js**: Backend runtime environment
- **Express.js**: Web framework for handling HTTP requests and routing
- **MongoDB**: NoSQL database for storing user and thought data
- **Mongoose**: ODM for MongoDB, defining models and schemas
- **Insomnia/Postman**: API testing tools for sending HTTP requests
- **MongoDB Compass**: GUI for MongoDB for data inspection and management

---

## System Architecture

The system is built using a **Model-View-Controller (MVC)** pattern:

1. **Models**: Define the data structure for `User`, `Thought`, and `Reaction`.
2. **Controllers**: Handle business logic and user requests.
3. **Routes**: Define API endpoints for interacting with the application.
4. **Database**: MongoDB stores users, thoughts, and reactions in collections.


# DevBlog

DevBlog is a simple blog website made using **Node.js, Express.js, EJS and Express Session**.

The main purpose of this project is to understand how **login authentication and sessions** work in an Express application.

## Features

- Simple DevBlog homepage
- Login page
- Username and password authentication
- Express Session for maintaining login session
- Protected home page
- Logout functionality
- EJS templates
- Simple CSS design

## Technologies Used

- Node.js
- Express.js
- EJS
- Express Session
- HTML
- CSS

## Project Structure

passport project/
│
├── app.js
├── package.json
│
├── views/
│   ├── login.ejs
│   └── index.ejs
│
└── public/css/
    └── style.css

## Authentication

This project uses a simple username and password authentication system.

Demo login details:

Username: Admin
Password: 1234

## Express Session

**Express Session** is used to maintain the user's login session.

After successful login, a session is created and the user can access the home page.

If the user is not logged in and tries to access the home page, they are redirected to the login page.
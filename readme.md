## Model Express App

This repository has an express app at many different states to model the setup for different situations. Explore the branches and checkout this readme to learn about each state.

## super-organized-mongo-ejs-auth Branch

This branch shows an express app using EJS as a template engine implementing full crud routes for a basic todo list.

In this branch we use MongoDB as a database and connect to it using the mongoose library. We also implement multi-user authentication.

- Create a User Model
- Routes for Signup & Login
- Use of sessions to track login status
- auth middleware on todo routes to protect them from logged out usersnp

We also implement full MVC style setup with a Models, Views and Controllers folder separating concerns and organizing code.

This branch goes a few more steps into organizing the code with utilities and middleware folder.

|Route|Method|Path|Response|
|-----|------|----|--------|
|Index|GET|/todo| Returns a page listing all todos |
|Show|GET|/todo/:id| Returns a page listing a single todo |
|Create|POST|/todo| Receives form input to create a new todo, redirects to index |
|New|GET|/todo/new| Returns a page with a form for creating a new todo |
|Update|PUT|/todo/:id| Receives form input to update a todo, redirects to index |
|Edit|GET|/todo/:id/edit| Returns a page with a form to update a todo |
|Destroy|Delete|/todo/:id| Deletes a todo and redirects to index |

checkout comments for more details

Any variables like `process.env.PORT` are assumed to have been defined in a .env file like so...

```
PORT=4000
```
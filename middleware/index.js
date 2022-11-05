require("dotenv").config() // import .env variables
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const cors = require("cors")
const TodoRouter = require("../controllers/todo") // import Todo router
const UserRouter = require("../controllers/user") // import User router
const GlobalRouter = require("../controllers/global") // import Global Router
const session = require('express-session');
const MongoStore = require('connect-mongo');


function registerGlobalMiddleware(app){

//**************************
// Register Middleware
//**************************
app.use(morgan("tiny")) // log every request
app.use(cors()) // allow cross-site requests
app.use("/static", express.static("public")) // "/static" urls will serve files from public folder
app.use(methodOverride("_method")) // enable overriding form submission methods
app.use(express.urlencoded({extended: true})) // parse urlencoded bodies
app.use(express.json()) // parse JSON bodies
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.MONGODB_URI})
  })); // manage session cookies

//**************************
// Register Routers
// groups of routes
//**************************
app.use("/todo", TodoRouter)
app.use("/user", UserRouter)
app.use(GlobalRouter) // for all other requests

}

module.exports = registerGlobalMiddleware
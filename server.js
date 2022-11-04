//**************************
// DEPENDENCIES
//**************************
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const cors = require("cors")
const Todo = require("./models/todo.js") // import Todo object

//**************************
// GLOBAL VARIABLES
//**************************
const PORT = process.env.PORT || 3000

//**************************
// Create Express App Object
//**************************
const app = express()

//**************************
// Register Middleware
//**************************
app.use(morgan("tiny")) // log every request
app.use(cors()) // allow cross-site requests
app.use("/static", express.static("public")) // "/static" urls will serve files from public folder
app.use(methodOverride("_method")) // enable overriding form submission methods
app.use(express.urlencoded({extended: true})) // parse urlencoded bodies
app.use(express.json()) // parse JSON bodies

//**************************
// Register Routes
//**************************
// main route
app.get("/", (req, res) => {
    res.render("home.ejs")
})

// index route
app.get("/todo", (req, res) => {
    res.render("todo/index.ejs", {
        todos: Todo.get()
    })
})

// create route
app.post("/todo", (req, res) => {
    Todo.create(req.body)
    res.redirect("/todo")
})

// new route
app.get("/todo/new", (req, res) => {
    res.render("todo/new.ejs")
})

// update route
app.put("/todo/:id", (req, res) => {
    Todo.update(req.params.id, req.body)
    res.redirect("/todo")
})

// edit route
app.get("/todo/:id/edit", (req, res) => {
    res.render("todo/edit.ejs", {
        todo: Todo.creategetOne(req.params.id)
    })
})

// destroy route
app.delete("/todo/:id", (req, res) => {
    Todo.delete(req.params.id)
    res.redirect("/todo")
})

// show route
app.get("/todo/:id", (req, res) => {
    res.render("todo/show.ejs", {
        todo: Todo.getOne(req.params.id)
    })
})

//**************************
// Server Listener
//**************************
app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})
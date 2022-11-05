// in this file we will create a todo controller/router and export it

//**************************
// Dependencies
//**************************
const Todo = require("../models/todo")
const {Router} = require("express")
const {auth} = require("../utilities")

//**************************
// Create Router
//**************************
const router = Router()

//**************************
// Router Middleware
//**************************
router.use(auth)


//**************************
// Define Routes
//**************************

// index route
router.get("/", async (req, res) => {
    res.render("todo/index.ejs", {
        todos: await Todo.find({username: req.session.username})
    })
})

// create route
router.post("/", (req, res) => {
    req.body.username = req.session.username
    Todo.create(req.body)
    res.redirect("/todo")
})

// new route
router.get("/new", (req, res) => {
    res.render("todo/new.ejs")
})

// update route
router.put("/:id", async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/todo")
})

// edit route
router.get("/:id/edit", async (req, res) => {
    res.render("todo/edit.ejs", {
        todo: await Todo.findById(req.params.id),
        index: req.params.id
    })
})

// destroy route
router.delete("/:id", async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.redirect("/todo")
})

// show route
router.get("/:id", async (req, res) => {
    res.render("todo/show.ejs", {
        todo: await Todo.findById(req.params.id),
        index: req.params.id
    })
})

//**************************
// Export Router
//**************************
module.exports = router
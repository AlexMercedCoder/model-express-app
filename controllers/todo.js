// in this file we will create a todo controller/router and export it

//**************************
// Dependencies
//**************************
const Todo = require("../models/todo")
const {Router} = require("express")

//**************************
// Create Router
//**************************
const router = Router()

//**************************
// Function for Catch Callback
//**************************
function caught(req, res){
    return (error) => {
        console.log(error)
        res.status(400).json("ERROR - Read Log Output")}
}

//**************************
// Define Routes
//**************************

// index route
router.get("/", async (req, res) => {
    const todos = await Todo.find({}).catch(caught(req, res))
    res.json(todos)
})

// create route
router.post("/", async (req, res) => {
    await Todo.create(req.body).catch(caught(req, res))
    const todos = await Todo.find({}).catch(caught(req, res))
    res.json(todos)
})

// update route
router.put("/:id", async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body).catch(caught(req, res))
    const todos = await Todo.find({}).catch(caught(req, res))
    res.json(todos)
})

// destroy route
router.delete("/:id", async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id).catch(caught(req, res))
    const todos = await Todo.find({}).catch(caught(req, res))
    res.json(todos)
})

// show route
router.get("/:id", async (req, res) => {

    const todos = await Todo.findById(req.params.id).catch(caught(req, res))
    res.json(todos)
})

//**************************
// Export Router
//**************************
module.exports = router
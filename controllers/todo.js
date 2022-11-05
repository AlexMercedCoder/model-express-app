// in this file we will create a todo controller/router and export it

//**************************
// Dependencies
//**************************
const {Todo} = require("../models");
const { Router } = require("express");
const middleware = require("./middleware");

//**************************
// Create Router
//**************************
const router = Router();

//**************************
// Function for Catch Callback
//**************************
function caught(req, res) {
  return (error) => {
    console.log(error);
    res.status(400).json("ERROR - Read Log Output");
  };
}

//**************************
// Router Middleware
//**************************
router.use(middleware.auth);

//**************************
// Define Routes
//**************************

// index route
router.get("/", async (req, res) => {
  const todos = await Todo.findAll({
    where: { username: req.payload.username },
  }).catch(caught(req, res));
  res.json(todos);
});

// create route
router.post("/", async (req, res) => {
  req.body.username = req.payload.username;
  await Todo.create(req.body).catch(caught(req, res));
  const todos = await Todo.findAll({
    where: { username: req.payload.username },
  }).catch(caught(req, res));
  res.json(todos);
});

// update route
router.put("/:id", async (req, res) => {
  await Todo.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).catch(caught(req, res));
  const todos = await Todo.findAll({
    where: { username: req.payload.username },
  }).catch(caught(req, res));
  res.json(todos);
});

// destroy route
router.delete("/:id", async (req, res) => {
  await Todo.destroy({
    where: {
      id: req.params.id,
    },
  }).catch(caught(req, res));
  const todos = await Todo.findAll({
    where: { username: req.payload.username },
  }).catch(caught(req, res));
  res.json(todos);
});

// show route
router.get("/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id).catch(caught(req, res));
  res.json(todo);
});

//**************************
// Export Router
//**************************
module.exports = router;

// in this file we'll import the mongoose connection and create a todo model
// we'll export the model for use in our routes

//**************************
// DEPENDENCIES
//**************************
const mongoose = require("./connection.js")
const {Schema, model} = mongoose

//**************************
// Todo Schema = Definition of a Todo
//**************************
const TodoSchema = new Schema({
    text: String
}, {timestamps: true})

//**************************
// Todo Model = Object for doing database operations
//**************************
const Todo = model("Todo", TodoSchema)

//**************************
// Export Model for use in Routes
//**************************
module.exports = Todo
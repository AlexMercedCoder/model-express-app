// in this file we'll import the mongoose connection and create a user model
// we'll export the model for use in our routes

//**************************
// DEPENDENCIES
//**************************
const mongoose = require("./connection.js")
const {Schema, model} = mongoose

//**************************
// User Schema = Definition of a Todo
//**************************
const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true}
    
}, {timestamps: true})

//**************************
// User Model = Object for doing database operations
//**************************
const User = model("User", UserSchema)

//**************************
// Export Model for use in Routes
//**************************
module.exports = User
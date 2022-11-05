// Purpose of this file is to create the mongo connection
// once we establish the connection, we'll export it to use in our models

//**************************
// DEPENDENCIES
//**************************
require("dotenv").config() // import .env variables
const mongoose = require("mongoose")


//**************************
// GLOBAL VARIABLES
//**************************
const MONGODB_URI = process.env.MONGODB_URI
console.log(MONGODB_URI)

//**************************
// Establish Connection
//**************************
mongoose.connect(MONGODB_URI)

//**************************
// Connection Messages
//**************************
mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disconnected from Mongo"))
.on("error", (error) => console.log(error))

//**************************
// Export Connected Object
//**************************

module.exports = mongoose
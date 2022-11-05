//**************************
// DEPENDENCIES
//**************************
require("dotenv").config() // import .env variables
const express = require("express")
const registerGlobalMiddleware = require("./middleware")

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
registerGlobalMiddleware(app)

//**************************
// Server Listener
//**************************
app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})
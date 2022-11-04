//**************************
// DEPENDENCIES
//**************************
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const cors = require("cors")

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
    res.send("Hello World")
})

//**************************
// Server Listener
//**************************
app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})
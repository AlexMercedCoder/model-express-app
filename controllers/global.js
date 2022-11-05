// in this file we will create a global router for "/" routes

//**************************
// Dependencies
//**************************)
const {Router} = require("express")


//**************************
// Create Router
//**************************
const router = Router()

//**************************
// Define Routes
//**************************

// main route
router.get("/", (req, res) => {
    res.render("home.ejs")
})

//**************************
// Export Router
//**************************
module.exports = router
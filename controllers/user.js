// in this file we will create a user controller/router and export it

//**************************
// Dependencies
//**************************
require("dotenv").config();
const {User} = require("../models");
const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
// Define Routes
//**************************

// Signup
router.post("/signup", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);
  User.create(req.body).catch(caught(req, res));
  res.json("user created");
});

// Login
router.post("/login", async (req, res) => {
  // check if user exists
  const user = await User.findOne({
    where: { username: req.body.username },
  }).catch(caught(req, res));

  if (user) {
    // check if password is correct
    const check = bcrypt.compare(req.body.password, user.password);
    if (check) {
      const token = jwt.sign({ username: user.username }, process.env.SECRET);
      res.json({ token });
    } else {
      res.status(400).json("Wrong Password");
    }
  } else {
    res.status(400).json("User Unknown");
  }
});

//**************************
// Export Router
//**************************
module.exports = router;

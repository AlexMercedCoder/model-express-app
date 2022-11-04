// in this file we will create a user controller/router and export it

//**************************
// Dependencies
//**************************
const User = require("../models/user");
const { Router } = require("express");
const bcrypt = require("bcryptjs");

//**************************
// Create Router
//**************************
const router = Router();

//**************************
// Define Routes
//**************************

// Signup
router.get("/signup", async (req, res) => {
  res.render("user/signup.ejs");
});

router.post("/signup", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);
  User.create(req.body);
  res.redirect("/user/login");
});

// Login
router.get("/login", async (req, res) => {
  res.render("user/login.ejs");
});

router.post("/login", async (req, res) => {
  // check if user exists
  const user = await User.findOne({ username: req.body.username });

  if (user) {
    // check if password is correct
    const check = bcrypt.compare(req.body.password, user.password);
    if (check) {
      req.session.username = user.username;
      res.redirect("/todo");
    } else {
      res.status(400).json("Wrong Password");
    }
  } else {
    res.status(400).json("User Unknown");
  }
});

// Logout
router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/")
    })
})

//**************************
// Export Router
//**************************
module.exports = router;

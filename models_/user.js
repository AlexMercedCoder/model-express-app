//**************************
// DEPENDENCIES
//**************************
const { DataTypes } = require('sequelize');
const db = require("./connection");

//**************************
// Todo Model = Object for doing database operations
//**************************

const User = db.define('User', {
    username: {
      type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING
    }
  });

//**************************
// Export Model for use in Routes
//**************************
module.exports = User
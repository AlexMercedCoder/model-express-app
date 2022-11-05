//**************************
// DEPENDENCIES
//**************************
const { DataTypes } = require('sequelize');
const db = require("./connection");

//**************************
// Todo Model = Object for doing database operations
//**************************

const Todo = db.define('Todo', {
    text: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING 
    }
  });

//**************************
// Export Model for use in Routes
//**************************
module.exports = Todo
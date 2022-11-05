// Purpose of this file is to create a postgres connection
// once we establish the connection, we'll export it to use in our models

//**************************
// DEPENDENCIES
//**************************
require("dotenv").config() // import .env variables
const { Sequelize } = require('sequelize');


//**************************
// GLOBAL VARIABLES
//**************************
const POSTGRES_URI = process.env.POSTGRES_URI

//**************************
// Establish Connection
//**************************
const db = new Sequelize(POSTGRES_URI)

//**************************
// Connection Messages
//**************************

async function dbCheck(){
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
dbCheck()

//**************************
// Export Connected Object
//**************************

module.exports = db
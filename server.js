// import packages
const mysql = require('mysql2');
const express = require('express');
const sequielize = require('sequelize');
const zipcodes = require('zipcodes')
const session = require('session');
const expSession = require('express-session');
require('dotenv').config();

// overhead express setup with instantiation and port number
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// for use of front end when thats defined
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({force:false}).then(() => {
    app.listen(PORT, () => {
        console.log('listening');
    })
});
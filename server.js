// imported packages
const mysql = require('mysql2');
const express = require('express');
const sequelize = require('./config/connection');
const zipcodes = require('zipcodes')
const session = require('session');
const expSession = require('express-session');
const routes = require('./controllers');
const path = require('path');
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
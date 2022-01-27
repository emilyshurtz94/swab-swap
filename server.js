// import packages
const mysql = require('mysql2');
const express = require('express');
const zipcodes = require('zipcodes')
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./controllers');
require('dotenv').config();

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store)

// overhead express setup with instantiation and port number
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create ({ date })

const sess = {
secret: process.env.DBS,
cookie: {},
resave: true,
saveUninitialized: true,
store: new SequelizeStore({
    db: sequelize
})
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

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
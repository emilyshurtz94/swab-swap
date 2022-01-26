const mysql = require('mysql2');
const app = require('express');
const sequielize = require('sequelize');
const zipcodes = require('zipcodes')
const session = require('session');
const expSession = require('express-session');
require('dotenv').config();
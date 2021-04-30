"use strict";

const express = require("express");
const app = express();
const api = require('./routes')
const hbs = require('express-handlebars')


//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.engine('.hbs', hbs({
    defaultLayout: 'default',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.use('/api', api)
app.get('/login', (req, res)=>{
    res.render('login')
})

module.exports = app
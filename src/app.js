const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const { Sequelize } = require('sequelize');

//Rotas

const user = require("./models/user");
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
const userRoute = require('./routes/userRoute');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use('/', index);
app.use('/person', personRoute);
app.use('/user', userRoute)

module.exports = app;
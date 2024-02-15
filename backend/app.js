'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const articleRouter = require('./routes/article');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((request, response, next) => {
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	response.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

app.use('/api', articleRouter);

module.exports = app;
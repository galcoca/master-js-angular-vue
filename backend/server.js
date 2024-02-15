'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = 3900;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/apiRestBlog', {})
    .then(() => {
        console.log("Database Connected correctly");

        app.listen(port, () => {
            console.log('Server Started using localhost and port ' + port)
        });

    });
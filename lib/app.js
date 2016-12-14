'use strict';
const appRoot 	    = require('app-root-path');
const bodyParser    = require('body-parser');
const config        = require(`${appRoot}/lib/config`);
const express 	    = require('express');
const app           = express();  
const routes        = require('./routes');
const server        = require('./server');

//set middleware for body/params reading
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

//set client public files
app.use(express.static(appRoot + '/src/public/dist/'));  

routes(app);

app.get('*', (req, res) => {
    res.sendFile(`${appRoot}/index.html`);
});

module.exports = app;
'use strict';
const appRoot   = require('app-root-path');
const services  = require(`${appRoot}/lib/services`);

module.exports = (app) => {

    app.get('/crimes', (req, res) => {
        services.APD.getData()
            .then(response => {
                console.log(response.status);
                console.log(response.data.length);
                res.send(response.data);
            }).catch(err => {
                constole.log(err);
                res.status(500).send(err.stack);
            });
    });

}
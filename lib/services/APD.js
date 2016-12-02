'use strict';
const appRoot   = require('app-root-path');
const Promise   = require('bluebird');
const request   = require('request');

const API_KEY   = require(`${appRoot}/lib/config`).AUSTIN_API_KEY;
const ROOT_URL = 'https://data.austintexas.gov/resource/rkrg-9tez.json'

class APD {
    static getData(){
        return new Promise((resolve, reject) => {
            let opts = {
                url: ROOT_URL,
                headers: {
                    "X-App-Token": API_KEY
                }
            }

            request.get(opts, (err, response, body) => {
                if(err){ reject(err); }
                else { resolve({ status: response.statusCode, data: body }); }
            });
        });        
    }
}

module.exports = APD;
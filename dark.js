'use strict';
const appRoot   = require('app-root-path');
const app       = require(appRoot + '/lib/app');
const server    = require(appRoot + '/lib/server');

server(app);
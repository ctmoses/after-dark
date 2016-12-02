'use strict';
const config = require('./config');

module.exports = (app) => {
    app.listen(config.NODE_PORT);
    console.log(`Status app listening on ${config.NODE_PORT} ...`);
}
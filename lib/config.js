'use strict';
module.exports = {
    NODE_ENV : process.env.NODE_ENV || "development",
    API_KEY  : process.env.AUSTIN_API_KEY || 0,
    NODE_PORT: process.env.NODE_PORT || 3000 
}
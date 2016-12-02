'use strict';
const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/public/dist');
const APP_DIR = path.resolve(__dirname, 'src/index.js');

let config = {
  entry: APP_DIR,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
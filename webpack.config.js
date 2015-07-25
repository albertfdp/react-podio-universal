var webpack = require('webpack');

var config = (process.env.NODE_ENV === 'production') ? require('./webpack/production.config.js') :
  require('./webpack/development.config.js');

module.exports = config;

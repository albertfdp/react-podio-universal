var path = require('path');
var webpack = require('webpack');
var objectAssign = require('object-assign');

var env = {
  production: process.env.NODE_ENV === 'production',
  test: process.env.NODE_ENV === 'test',
  development: process.env.NODE_ENV === 'development',
};

module.exports = {
  target: 'web',

  entry: './src/client.js',

  output: {
    path: path.join(process.cwd(), 'build'),
    publicPath: 'http://localhost:3000/src/',
    filename: '[name].js',
    pathInfo: true
  },

  resolve: {
    root: path.join(process.cwd(), 'src'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },

  resolveLoader: {
    root: path.join(process.cwd(), 'node_modules')
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: env.development,
      __PRODUCTION__: env.production,
      __CURRENT_ENV__: "'" + (process.env.NODE_ENV) + "'",
      __CLIENT__: true,
      __SERVER__: false
    })
  ],

  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],
    loaders: []
  }

};

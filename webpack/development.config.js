var webpack = require('webpack');
var objectAssign = require('object-assign');
var config = require('./base.config');

module.exports = objectAssign(config, {

  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/dev-server',
    config.entry
  ],

  devtool: 'eval-source-map',

  debug: true,

  plugins: config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ]),

  module: objectAssign(config.module, {
    loaders: config.module.loaders.concat([
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.scss$|\.css$/, loader: 'style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded'}
    ])
  })

});

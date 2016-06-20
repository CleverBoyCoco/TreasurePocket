'use strict';

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var embedFileSize = 65536;//64K

var config = {

  debug: true,

  devtool: 'source-map',

  entry: {
    'index.ios': ['./src/main.js'],
    'index.android': ['./src/main.js'],
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  externals: {
    "react-native": {}
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'node_modules/react-native-image-picker'),
      ],
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0', 'react'],
        plugins: [],
      },
    },
      {test: /\.png$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/png'},
      {test: /\.jpg$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/jpeg'},
    ]
  },

  plugins: [],

};

// Hot loader
if (process.env.HOT) {
  config.devtool = 'eval'; // Speed up incremental builds
  config.entry['index.ios'].unshift('react-native-webpack-server/hot/entry');
  config.entry['index.ios'].unshift('webpack/hot/only-dev-server');
  config.entry['index.ios'].unshift('webpack-dev-server/client?http://localhost:8082');
  config.output.publicPath = 'http://localhost:8082/';
  config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

  // Note: enabling React Transform and React Transform HMR:
  config.module.loaders[0].query.plugins.push([
    'react-transform', {
      transforms: [{
        transform: 'react-transform-hmr',
        imports: ['react-native'],
        locals: ['module']
      }]
    }
  ]);
}

// Production config
if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
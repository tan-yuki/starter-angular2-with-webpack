// @see https://webpack.github.io/docs/configuration.html
// @see https://github.com/AngularClass/angular2-webpack-starter/blob/master/webpack.config.js

var path = require('path');
var webpack = require('webpack');

// var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = {

  debug: true,

  devtool: 'source-map',

  entry: {
    'main': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  output: {
    path: './dist',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
  },

  module: {

    preLoaders: [
      {test: /\.js$/, loader: 'source-map-loader', exclude: [root('node_modules/rxjs')]}
    ],

    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'babel-loader',
          'ts-loader'
        ],
        exclude: [
          /\.(spec|e2e|async)\.ts$/
        ]
      }
      // {test: /\.json$/, loader: 'json-loader'},
      // {test: /\.css$/, loader: 'raw-loader'},
      // {test: /\.html$/, loader: 'raw-loader', exclude: ['index.html']}
    ]

  }

  // plugins: [
  //   new ForkCheckerPlugin(),
  // ],

  // tslint: {
  //   emitErrors: false,
  //   failOnHint: false,
  //   resourcePath: 'src'
  // }


};

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

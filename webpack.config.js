const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolve = require("path").resolve;
const ExtractText = require("extract-text-webpack-plugin");

require("sass-loader");
require("css-loader");
require("style-loader");

var config = {
  entry: {
    app: './src/js/main.js', 
  },

  output: {
    path: resolve(`${__dirname}/dist`),
    filename: "[name]-[hash].bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractText.extract(['css-loader','sass-loader'])
      }
    ]
  },

  plugins: [
    new Webpack.NoErrorsPlugin(),
    new Webpack.optimize.DedupePlugin(),
    new Webpack.optimize.OccurenceOrderPlugin(),
    //new Webpack.optimize.UglifyJsPlugin(),
    new ExtractText("css/[name]-[hash].css", {disable: false, allChunks: true}),
    new HtmlWebpackPlugin({template: './src/index.html'})

  ]
};

module.exports = config;

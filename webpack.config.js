const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const debug = false

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
        loader: 'file-loader?outputPath=fonts/',
      },
      {
        test: /\.(mp4|3gp|avi|flv)$/,
        loader: 'url-loader?limit=8192&outputPath=video/',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        loader: 'url-loader?limit=8192&outputPath=images/!image-webpack-loader',
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src', 'video:poster', 'source:src']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'My Webpack App',
      minify: debug ? false : {
        collapseWhitespace: true
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: './product.html',
      title: 'My Webpack App Product',
      minify: debug ? false : {
        collapseWhitespace: true
      },
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new ExtractTextPlugin("styles/styles.css"),
  ]
}

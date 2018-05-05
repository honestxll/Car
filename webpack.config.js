const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const debug = true

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
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
        use: 'file-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        use: 'url-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      title: 'My Webpack App',
      minify: debug ? false : {
        collapseWhitespace: true
      },
      inject: true,
      hash: false
    }),
    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: './product.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}

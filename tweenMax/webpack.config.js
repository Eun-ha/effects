const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output:{
    path: path.resolve('./dist'),
    filename: '[name].js',
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.jpeg$/,
        use: [
          {
            loader:'file-loader',
            options:{
              publicPath: '../dist'
            }
          }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index/html'
    })
  ]
}
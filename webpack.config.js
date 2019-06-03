const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');




module.exports = {
  entry: ['@babel/polyfill', './client/src/index.jsx'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        enforce:'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './client/src/index.html',
      filename: './index.html'
    })
  ]
};

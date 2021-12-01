const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development', //production
  entry: {
    main: path.resolve(__dirname, './client/src/app.jsx')
  },
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 1121,
    watchContentBase: true
  },
  module:
  {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
              loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  //plugins: [ new HtmlWebpackPlugin({ template: '.dist/index.html'})],
}
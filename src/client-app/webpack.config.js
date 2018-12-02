const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpacPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './entries/app/index.js',
    footer: './entries/footer/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WoW Buddy',
      template: 'index.html'
    }),
    new CleanWebpacPlugin(['dist'])
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
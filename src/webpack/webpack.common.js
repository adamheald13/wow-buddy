const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const cleanWebpackPlugin = new CleanWebpackPlugin(['dist']);
cleanWebpackPlugin.options.root = path.resolve(__dirname, '../client-app');

module.exports = {
  entry: {
    app: './client-app/entries/app/index.js',
    footer: './client-app/entries/footer/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WoW Buddy',
      template: './client-app/index.html'
    }),
    cleanWebpackPlugin
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../client-app/dist'),
    publicPath: '/'
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
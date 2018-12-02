const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpacPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './client-app/entries/app/index.js',
    footer: './client-app/entries/footer/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WoW Buddy',
      template: './client-app/index.html'
    }),
    new CleanWebpacPlugin(['dist'])
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
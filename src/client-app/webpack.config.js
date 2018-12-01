const path = require('path');

module.exports = {
  entry: './entries/main/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
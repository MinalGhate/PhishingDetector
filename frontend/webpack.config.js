// webpack.config.js
const path = require('path');

module.exports = {
    mode: 'development',
  entry: './frontend/src/components/Homepage.js',
  output: {
    
    filename: 'homepage.bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};

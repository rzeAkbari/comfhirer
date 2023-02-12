const path = require('path');

module.exports = {
  entry: './build/main.js',
  output: {
    filename: 'comfhirer.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'comfhirer',
  },
};

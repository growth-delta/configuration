const path = require('path');

module.exports = {
  entry: {
    site: './assets/JavaScript/site.js',
    FactGenerator: './assets/JavaScript/applications/FactGenerator/FactGenerator.jsx',
    Table: './assets/JavaScript/applications/Table/Table.jsx',
  },  // input file
  output: {
    filename: '[name]-bundle.js',  // output bundles
    path: path.resolve(__dirname, './static/JavaScript/bundles'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
      },
    ]
  },
};

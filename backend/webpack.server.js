const path = require('path')
var nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: './src/index.js',
  mode: "development",

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/')
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        "loader": "babel-loader",
        "options": {
          "exclude": [
            // \\ for Windows, \/ for Mac OS and Linux
            /node_modules/,
            /node_modules[\\\/]core-js/,
            /node_modules[\\\/]webpack[\\\/]buildin/,
          ],
          "presets": [
            "@babel/preset-env"
          ],
          "plugins": ["@babel/transform-runtime"]
        }
      }
    ]
  }
}

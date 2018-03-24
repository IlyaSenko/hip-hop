const path = require('path');

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:/(node_modules)/,
        loader:"babel-loader",
        query:{
          presets:["env"]
        }
      },
      {
         test:/\.(s*)css$/,
         use:['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: 'url-loader'
      },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'url-loader?limit=100000'}
    ]
  },
  entry: {
    bundle: path.resolve(__dirname, './public/js/app.js'),
    freshmen: path.resolve(__dirname, './public/js/freshmen.js')
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
};

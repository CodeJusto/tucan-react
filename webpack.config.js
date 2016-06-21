var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      // tell webpack to use react-hot and babel to process js and jsx files
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      // tell webpack to use the style-loader, css-loader, postcss-loader and less-loader
      // in that order, to process less files
      {
        test: /\.less$/,
        loader: 'style!css!postcss!less'
      },

      {
        test: /\.scss$/,
        // loaders: ["style", "css", "sass"]
        loader: 'style!css!sass'
      },

      { test: /\.css$/, loader: "style-loader!css-loader" },

      {
       test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
       loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
       test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
       loader: "file-loader"
      },
      {
       test: /\.jpe?g$|\.gif$|\.png$|\.wav$|\.mp3$/,
       loader: "file-loader"
      }
    ]
  }
};


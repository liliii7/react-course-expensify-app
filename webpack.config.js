const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          }),
        },
      ],
    },
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
      }),
      ...(isProduction
        ? [
            new UglifyJsPlugin({
              uglifyOptions: {
                compress: {
                  drop_console: true,
                },
                output: {
                  comments: false,
                },
              },
              sourceMap: true,
            }),
          ]
        : []),
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
    },
    externals: {
      'react-router-dom': 'commonjs react-router-dom',
    },
  };
};

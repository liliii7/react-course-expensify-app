const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' })
}else if(process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' })
}

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const CSSExtract = new MiniCssExtractPlugin({
    filename: "styles.css",
  });

  return {
    mode: isProduction ? 'production' : 'development',
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js",
      publicPath: "/dist/",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(isProduction ? "production" : "development"),
        "process.env.FIREBASE_API_KEY": JSON.stringify(process.env.FIREBASE_API_KEY),
        "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        "process.env.FIREBASE_DATABASE_URL": JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        "process.env.FIREBASE_PROJECT_ID": JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        "process.env.FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
        "process.env.FIREBASE_APP_ID": JSON.stringify(process.env.FIREBASE_APP_ID),
        "process.env.FIREBASE_MEASUREMENT_ID": JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),
      }),
      ...(isProduction
        ? [
            new TerserPlugin({
              terserOptions: {
                compress: {
                  drop_console: true,
                },
                output: {
                  comments: false,
                },
              },
              extractComments: false,
            }),
          ]
        : []),
    ],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      static: path.join(__dirname, "public"),
      historyApiFallback: true,
    },
  };
};

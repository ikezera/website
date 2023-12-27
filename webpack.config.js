// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    watchFiles: ['src/**/*.html', 'src/**/*.css', 'index.html'],
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['dist/**/*'],
    }),

    new MiniCssExtractPlugin({
      filename: './src/css/style.css',
      chunkFilename: 'style_chk.css',
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/css', to: 'css' },
        { from: 'src/js', to: 'js' },
        { from: 'src/assets', to: 'assets' },
        { from: 'src/fonts', to: 'fonts' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // Add this line
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
    // config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = 'development';
  }
  return config;
};

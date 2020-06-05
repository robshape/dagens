import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

import { dependencies } from './package.json';

export default {
  mode: 'production',

  module: {
    rules: [
      {
        include: path.resolve(__dirname, './src/'),
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: false,
      }),
    ],
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: Object
        .keys(dependencies)
        .map((dependency) => ({
          [`vendors-${dependency.replace('@', '').replace('/', '-')}`]: {
            test: new RegExp(`/node_modules/${dependency}/`),
          },
        }))
        .reduce((acc, cur) => ({
          ...acc,
          ...cur,
        })),
      chunks: 'all',
      maxInitialRequests: Infinity,
    },
  },

  output: {
    filename: '[name].[contenthash].js',
  },

  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new CompressionPlugin({
      cache: false,
    }),
    new CopyPlugin({
      patterns: [
        './src/assets/',
      ],
    }),
    new HtmlWebpackPlugin({
      cache: false,
      minify: {
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        decodeEntities: true,
        minifyURLs: true,
        quoteCharacter: "'",
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        sortAttributes: true,
        sortClassName: true,
        useShortDoctype: true,
      },
      scriptLoading: 'defer',
      template: './src/index.html',
    }),
  ],

  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.tsx',
    ],
  },
};

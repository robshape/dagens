import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

export default {
  devServer: {
    hot: true,
  },

  devtool: 'eval-cheap-module-source-map',

  mode: 'development',

  module: {
    rules: [
      {
        include: path.resolve(__dirname, './src/'),
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheCompression: false,
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },

  optimization: {
    removeEmptyChunks: false,
    splitChunks: false,
  },

  output: {
    pathinfo: false,
  },

  plugins: [
    new HtmlWebpackPlugin({
      scriptLoading: 'defer',
      template: './src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
};

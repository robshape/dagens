import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  devServer: {
    hot: true,
  },

  devtool: 'cheap-module-eval-source-map',

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
    extensions: [
      '.js',
      '.ts',
      '.tsx',
    ],
  },
};

export default config;

import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  devServer: {
    hot: true,
  },

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
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },

  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },

  output: {
    pathinfo: false,
  },

  plugins: [
    new HtmlWebpackPlugin({
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
    modules: [
      path.resolve(__dirname, './node_modules/'),
    ],
  },
};

export default config;

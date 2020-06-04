const config = {
  plugins: [
    ['babel-plugin-styled-components', {
      displayName: false,
      pure: true,
      ssr: false,
    }],
    'react-hot-loader/babel',
  ],
  presets: [
    ['@babel/preset-env', {
      corejs: 3,
      useBuiltIns: 'entry',
    }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};

module.exports = config;

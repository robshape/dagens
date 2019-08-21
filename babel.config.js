const config = {
  plugins: [
    ['babel-plugin-styled-components', {
      pure: true,
      ssr: false,
    }],
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

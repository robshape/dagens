module.exports = {
  env: {
    browser: true,
  },

  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],

  parserOptions: {
    project: './tsconfig.json',
  },

  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'webpack.config.dev.ts',
        'webpack.config.prod.ts',
      ],
    }],
    'import/prefer-default-export': 'off',
    'no-void': 'off',
  },
};

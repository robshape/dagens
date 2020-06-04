module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
  ],

  processors: [
    'stylelint-processor-styled-components',
  ],

  rules: {
    'value-keyword-case': ['lower', {
      ignoreKeywords: [
        'dummyValue',
      ],
    }],
  },
};

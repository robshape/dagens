module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    // Prettier is last because it overrides previous configs!
    'stylelint-config-prettier',
  ],

  processors: [
    'stylelint-processor-styled-components',
  ],
};

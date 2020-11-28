module.exports = {
  plugins: ['stylelint-prettier', 'stylelint-scss'],
  extends: ['stylelint-config-standard'],
  rules: {
    // 'order/properties-alphabetical-order': true,
    'at-rule-no-unknown': null, //scssで使える @include などにエラーがでないようにする
    'scss/at-rule-no-unknown': true, //scssでもサポートしていない @ルール にはエラーを出す
  },
};

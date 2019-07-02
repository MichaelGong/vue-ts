module.exports = {
  root: true,
  'extends': 'stylelint-config-primer',
  rules: {
    'selector-max-id': 1,
    'selector-max-specificity': '1,4,0',
    'selector-no-qualifying-type': [true, {
      'ignore': ['attribute', 'class', 'id']
    }],
    'selector-max-type': 2,
  }
}

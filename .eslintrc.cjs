const INLINE_ELEMENTS = require('eslint-plugin-vue/lib/utils/inline-non-void-elements.json')

module.exports = {
  root: true,
  extends: ['@nuxtjs/eslint-config-typescript'],
  rules: {
    'quotes': [2, 'single', 'avoid-escape'],
    'vue/no-v-html': 'off',
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 4
      },
      'multiline': {
        'max': 1
      }
    }],
    'no-new': 0,
    'import/no-named-as-default': 0,
    'vue/no-v-text-v-html-on-component': 0,
    'vue/singleline-html-element-content-newline': ['error', {
      'ignoreWhenNoAttributes': true,
      'ignoreWhenEmpty': true,
      'ignores': [
        'pre',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'textarea',
        'nuxt-link',
        ...INLINE_ELEMENTS
      ]
    }]
  }
}

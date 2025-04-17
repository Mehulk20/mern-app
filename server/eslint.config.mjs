import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-debugger': 'error',
      'node/no-unpublished-import': 'off',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'prefer-const': ['error', { destructuring: 'all' }],
      'no-var': 'error',
      semi: ['error', 'always'],
      indent: ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
];

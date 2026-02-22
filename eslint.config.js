const path = require('path')
const { createConfig } = require('@creo-team/eslint-config')

const base = createConfig({
  ignores: ['dist/**', 'node_modules/**', 'eslint.config.js'],
  tsconfig: path.resolve(__dirname, 'tsconfig.eslint.json'),
})

module.exports = [
  ...base,
  {
    files: ['**/*.ts'],
    rules: {
      'import/no-unresolved': 'off',
      'import/no-cycle': 'off',
      'import/no-relative-packages': 'off',
      'import/no-self-import': 'off',
      'import/no-useless-path-segments': 'off',
      'import/named': 'off',
      'import/no-duplicates': 'off',
    },
  },
  {
    files: ['src/misc.ts'],
    rules: { 'no-magic-numbers': 'off' },
  },
  {
    files: ['test/**/*.ts', 'vitest.config.ts'],
    rules: {
      '@typescript-eslint/naming-convention': 'off',
      'no-magic-numbers': 'off',
      'perfectionist/sort-objects': 'off',
    },
  },
]

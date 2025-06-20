// ESLint Flat Config (replaces .eslintrc)
const js = require('@eslint/js')
const parser = require('@typescript-eslint/parser')
const pluginTs = require('@typescript-eslint/eslint-plugin')
const pluginReact = require('eslint-plugin-react')
const pluginReactHooks = require('eslint-plugin-react-hooks')
const pluginImport = require('eslint-plugin-import')
const pluginJsxA11y = require('eslint-plugin-jsx-a11y')
const prettier = require('eslint-config-prettier')
const globals = require('globals')

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  js.configs.recommended, // ESLint core rules
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest', // Modern JS syntax
      sourceType: 'module', // Use ES modules
      parser, // Use TypeScript parser
      parserOptions: {
        project: './tsconfig.json', // Type-aware linting
      },
      globals: {
        ...globals.node, //
        ...globals.jest, //
      },
    },
    plugins: {
      '@typescript-eslint': pluginTs,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      import: pluginImport,
      'jsx-a11y': pluginJsxA11y,
    },
    rules: {
      // Disable base rule in favor of TypeScript version
      'no-unused-vars': 'off',
      // General Best Practices
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      // TypeScript Specific
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          // args: 'after-used', // This might help with arrow function params
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      // React & Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // Import Sorting and Ordering
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            { pattern: 'react', group: 'builtin', position: 'before' },
            { pattern: '@/**', group: 'internal' },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
  {
    files: ['*.tsx'],
    rules: {
      'jsx-a11y/accessible-emoji': 'off', // Optional: allow emojis without role/label
    },
  },
  {
    ignores: [
      'node_modules',
      'dist',
      'build',
      '.next',
      'coverage',
      '*.config.js',
    ],
  },
]

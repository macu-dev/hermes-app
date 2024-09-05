import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react  from 'eslint-plugin-react'
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import json from 'eslint-plugin-json';
import unusedImports from "eslint-plugin-unused-imports";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import jsxA11y  from 'eslint-plugin-jsx-a11y'
import eslintConfigPrettier from "eslint-config-prettier";






export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
       ...tseslint.configs.recommended,
       eslintConfigPrettier,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      react: {
        'version': 'detect'
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react': react,
      'simple-import-sort': simpleImportSort,
      json,
      "unused-imports": unusedImports,
      eslintPluginPrettierRecommended,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off',
      'no-console': 'warn',
      'eqeqeq': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          'args': 'after-used',
          'ignoreRestSiblings': false,
          'argsIgnorePattern': '^_.*?$'
        }
      ],
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'error',
      'json/*': ['error', 'allowComments'],
      'react/self-closing-comp': 'warn',
      'react/jsx-sort-props': [
        'warn',
        {
          'noSortAlphabetically': false
        }
      ],
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.tsx'],
        },
      ],
      'react/jsx-props-no-spreading': 'off',
      'react/boolean-prop-naming': [
        'error',
        {
          rule: '^(defaultIs|defaultHas|defaultShould|defaultAre|is|has|should|are)[A-Z]([A-Za-z0-9]?)+',
        },
      ],
      'react/prop-types': [
        'error',
        {
          ignore: ['children', 'as'],
        },
      ],
      'react/jsx-sort-props': [
        'error',
        {
          ignoreCase: true,
          callbacksLast: true,
          shorthandLast: true,
          reservedFirst: true,
        },
      ],
      'react/sort-prop-types': [
        'error',
        {
          requiredFirst: true,
          callbacksLast: true,
          noSortAlphabetically: true,
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/require-default-props': 'off',
      'react/function-component-definition': [
        2,
        {
          namedComponents: ['arrow-function', 'function-declaration'],
          unnamedComponents: 'arrow-function',
        },
      ],
      'padding-line-between-statements': [
        'warn',
        {
          'blankLine': 'always',
          'prev': 'directive',
          'next': '*'
        },
        {
          'blankLine': 'always',
          'prev': 'import',
          'next': ['block-like', 'export', 'const', 'let']
        },
        {
          'blankLine': 'always',
          'prev': '*',
          'next': 'block-like'
        },
        {
          'blankLine': 'always',
          'prev': 'block-like',
          'next': '*'
        },
        {
          'blankLine': 'always',
          'prev': '*',
          'next': 'return'
        },
        {
          'blankLine': 'always',
          'prev': ['const', 'let', 'var'],
          'next': '*'
        },
        {
          'blankLine': 'any',
          'prev': ['const', 'let', 'var'],
          'next': ['const', 'let', 'var']
        }
      ],
      'no-param-reassign': [
        'error',
        { props: true, ignorePropertyModificationsFor: ['state'] },
      ],
      'unused-imports/no-unused-imports': 'warn',
      'no-use-before-define': 'off',
      'unused-imports/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-nested-ternary': 'off',
      'no-unused-expressions': [
        'error',
        {
          allowTernary: true,
        },
      ],
      'no-shadow': 'off',
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          "components": [],
        }
      ],
      'jsx-a11y/label-has-associated-control': [
        2,
        {
          required: {
            some: ['nesting', 'id'],
          },
        },
      ],
    },

  },
)

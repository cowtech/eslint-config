import love from 'eslint-config-love'
import { flatConfigs } from 'eslint-plugin-import'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import neostandard from 'neostandard'

export const cowtech = [
  // Globals
  {
    ignores: ['coverage/**', 'dist/**', '**/*.d.{ts,mts,cts}', 'tmp/**']
  },
  // Start from Neostandard and eslint-plugin-import
  ...neostandard({ ts: true, files: ['**/*.{js,jsx,mjs,cjs}'], filesTs: ['**/*.{ts,tsx,mts,cts}'] }),
  {
    ...flatConfigs.recommended,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  },
  // Common
  {
    files: ['**/*.{js,jsx,mjs,cjs}', '**/*.{ts,tsx,mts,cts}'],
    rules: {
      curly: [2, 'all'],
      'no-return-await': 2, // Do not create useless promises
      '@stylistic/space-before-function-paren': 0 // This is inserted to make this compatible with prettier.
    },
    languageOptions: {
      globals: globals.node
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    }
  },
  // ESM
  {
    files: ['**/*.{js,jsx,mjs}', '**/*.{ts,tsx,mts}'],
    rules: {
      // This is required for proper ESM use
      'import/extensions': [2, 'ignorePackages', { jsx: 'always', tsx: 'always' }],
      'import/order': [
        2,
        {
          groups: [['type', 'builtin', 'external'], 'internal', 'parent', 'sibling', 'index', 'object'],
          'newlines-between': 'never',
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ]
    },
    settings: {
      'import/extensions': ['.js', '.jsx', '.mjs', '.cjs', '.ts', '.tsx', '.mts', '.cts'],
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.mts']
      },
      'import/resolver': {
        node: true,
        typescript: true
      }
    }
  },
  // Typescript
  {
    ...love,
    files: ['**/*.{ts,tsx,mts,cts}'],
    languageOptions: {
      parser: neostandard.plugins['typescript-eslint'].parser,
      sourceType: 'module'
    },
    plugins: {
      '@typescript-eslint': neostandard.plugins['typescript-eslint'].plugin
    },
    rules: {
      /*
        This is inserted to make this compatible with prettier.
        This is needed again as it is enabled from eslint-plugin-love.
      */
      '@stylistic/space-before-function-paren': 0,
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'separate-type-imports' }],
      '@typescript-eslint/array-type': [2, { default: 'array', readonly: 'array' }],
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/no-misused-promises': 0,
      '@typescript-eslint/promise-function-async': 0,
      '@typescript-eslint/require-await': 2,
      '@typescript-eslint/restrict-template-expressions': 0,
      '@typescript-eslint/return-await': 0,
      '@typescript-eslint/strict-boolean-expressions': 0,
      '@typescript-eslint/typedef': [
        2,
        {
          parameter: true,
          memberVariableDeclaration: true,
          propertyDeclaration: true
        }
      ]
    }
  },
  // JSX
  {
    files: ['**/*.jsx', '**/*.tsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      'react-hooks': reactHooks
    },
    rules: {
      '@stylistic/jsx-quotes': [2, 'prefer-double'],
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react/jsx-boolean-value': [2, 'always'],
      'react/jsx-no-bind': [2, { allowFunctions: true }],
      'react/jsx-uses-react': 0,
      'react/no-did-update-set-state': 'error',
      'react/no-string-refs': 2,
      'react/no-unknown-property': 'error',
      'react/no-unused-prop-types': 'error',
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 0
    }
  }
]

export const allowTypeScriptImport = [
  {
    files: ['**/*.{js,jsx,mjs}', '**/*.{ts,tsx,mts}'],
    rules: {
      'import/extensions': [2, 'ignorePackages', { jsx: 'always', tsx: 'always' }]
    }
  }
]

export default cowtech

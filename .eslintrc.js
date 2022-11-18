module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },

  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  globals: {
    // window: true,
    process: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['packages/**/*.ts', 'packages/**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
      ],
      rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'warn'
        // 'jsx-quotes': ['error', 'prefer-single']
      }
    },
    {
      files: [
        'packages/miniso-ut-demo/**/*.ts',
        'packages/miniso-ut-demo/**/*.tsx'
      ],
      extends: ['taro/react']
    },
    {
      files: ['packages/**/*.js', 'packages/**/*.jsx'],
      parserOptions: {
        parser: '@babel/eslint-parser', // 解析器
        sourceType: 'module',
        ecmaVersion: 12
      },
      extends: [
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
      ]
    }
  ]
}

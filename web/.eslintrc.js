module.exports = {
  env : {
    es2021 : true,
    node : true,
    browser : true,
  },
  extends : [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser : '@typescript-eslint/parser',
  parserOptions : {
    ecmaFeatures : {
      jsx : true,
      tsx : true,
    },
    ecmaVersion : 12,
    sourceType : 'module',
  },
  plugins : [
    'react',
    '@typescript-eslint',
  ],
  rules : {
    'react/jsx-filename-extension' : [1, { extensions : ['.js', '.jsx', '.tsx'] }],
    'react/no-unescaped-entities' : 0,
    '@typescript-eslint/no-use-before-define' : 'off',
    'no-use-before-define' : 'off',
    'linebreak-style' : 0,
    'no-irregular-whitespace' : 'off',
    'import/extensions' : 'off',
    quotes : ['error', 'single'],
    'key-spacing' : ['error', { beforeColon : true, afterColon : true }],
    'react/jsx-one-expression-per-line' : 'off',
    'import/prefer-default-export' : 'off',
    'no-unused-vars' : 'off',
  },
  settings : {
    'import/resolver' : {
      node : {
        extensions : ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};

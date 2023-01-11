module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    // Разрешаю пустые интерфейсы при их  расширении
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    // Конец строки LF
    'linebreak-style': ['error', 'unix'],
    // Настройка правила для React 17 и старше. Разрешает обрабатывать асинхронные функции как обработчики событий.
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: { attributes: false } },
    ],
  },
};
